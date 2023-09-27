import net from 'net';

const client = net.createConnection({
    port: 3000,
    host: 'localhost'
}, () => {
    console.log('Terhubung ke server!');

    client.write(`Hay server! ini dari client\r\n`);
});

client.on('data', (data) => {
    console.log(`Pesan dari Server : ${data}`);
    client.end();
});