import { threadId, Worker } from 'worker_threads';

const worker1 = new Worker('./worker.mjs');
const worker2 = new Worker('./worker.mjs');

worker1.postMessage(10);
worker2.postMessage(10);

worker1.addListener('message', (message) => {
    console.log(`thread saat ini ->${threadId}, menerima pesan dari worker 1 : ${message}`)
});
worker2.addListener('message', (message) => {
    console.log(`thread saat ini ->${threadId}, menerima pesan dari worker 2 : ${message}`)
});
