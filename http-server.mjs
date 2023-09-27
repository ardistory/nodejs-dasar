import http from 'http';

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/data') {
        const { tokenRahasia } = { tokenRahasia: `${Math.round(Math.random() * 12345678)}` }

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            message: `Selamat datang! kode rahasia anda ${tokenRahasia}`
        }));
    }
});

server.listen(3000, () => {
    console.log(`Server berjalan!`)
});