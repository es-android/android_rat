import React, { useEffect, useState } from 'react';
import { DeviceInfo } from '../../../core/protocol/Packet';

const DeviceList: React.FC = () => {
    const [devices, setDevices] = useState<DeviceInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await fetch('/api/devices');
                const data = await response.json();
                setDevices(data);
            } catch (error) {
                console.error('Failed to fetch devices:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDevices();
        const interval = setInterval(fetchDevices, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Active Managed Devices
            </h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="py-2">UID</th>
                        <th className="py-2">Platform</th>
                        <th className="py-2">Model</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr key={device.uid} className="hover:bg-gray-800 transition-colors">
                            <td className="py-3 font-mono text-sm">{device.uid.substring(0, 8)}...</td>
                            <td className="py-3">{device.osVersion}</td>
                            <td className="py-3">{device.model}</td>
                            <td className="py-3">
                                <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded">Online</span>
                            </td>
                            <td className="py-3">
                                <button className="text-blue-400 hover:text-blue-300 mr-3">Control</button>
                                <button className="text-red-400 hover:text-red-300">Terminate</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {loading && <p className="text-center mt-4 text-gray-500">Synchronizing with C2...</p>}
        </div>
    );
};

export default DeviceList;
