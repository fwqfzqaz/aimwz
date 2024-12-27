const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    // 将消息转发到特定的IP和端口
    const targetAddress = '103.85.86.51';
    const targetPort = 15001;

    server.send(msg, targetPort, targetAddress, (err) => {
        if (err) {
            console.error('发送失败:', err);
        } else {
            console.log(`消息已发送到 ${targetAddress}:${targetPort}`);
        }
    });
});

// 监听本地端口
server.bind(12345, () => {
    console.log('UDP 服务器正在运行，监听端口 12345');
});
