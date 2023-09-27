import net from 'net';

const server = net.createServer((socket) => {
    console.log('Ada client terhubung!');

    socket.addListener('data', (data) => {
        console.log(`data dari client : ${data}`);

        socket.write(`Data berhasil diterima di server!\r\n`);
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Server sudah berjalan!')
});