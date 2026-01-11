/**
 * @file Packet.ts
 * @description Defines the communication protocol between the C2 server and payloads.
 */

export enum PacketType {
    AUTH_REQ = 0x01,
    AUTH_RES = 0x02,
    PING = 0x03,
    PONG = 0x04,
    COMMAND_EXEC = 0x10,
    COMMAND_RESULT = 0x11,
    LOG_SYNC = 0x20,
    FILE_TRANSFER_START = 0x30,
    FILE_TRANSFER_CHUNK = 0x31,
    FILE_TRANSFER_END = 0x32,
    SCREEN_STREAM = 0x40,
}

export interface PacketHeader {
    type: PacketType;
    version: number;
    timestamp: number;
    payloadSize: number;
    signature?: string; // HMAC for integrity
}

export interface Packet<T = any> {
    header: PacketHeader;
    data: T;
}

/**
 * Example Command Payload
 */
export interface CommandParams {
    action: string;
    args: Record<string, any>;
    timeout?: number;
}

/**
 * Device Metadata
 */
export interface DeviceInfo {
    uid: string;
    model: string;
    osVersion: string;
    batteryLevel: number;
    isRooted: boolean;
    networkType: 'wifi' | 'cellular' | 'none';
}
