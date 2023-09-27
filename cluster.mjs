import cluster from 'cluster';
import process from 'process';
import os from 'os';
import http from 'http';

if (cluster.isPrimary) {
    for (let i = 0; i <= os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.addListener('exit', (worker) => {
        console.log(`Worker ${worker.id} sudah exit`);
        cluster.fork();
    });
}

if (cluster.isWorker) {
    console.log(`worker ${process.pid} start!`);
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Worker, PID : ${process.pid}`);
        process.exit();
    });

    server.listen(3000);
}