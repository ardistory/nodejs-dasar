import { threadId, parentPort } from 'worker_threads';

parentPort.on('message', (message) => {
    for (let i = 0; i < message; i++) {
        console.log(`dari thread ${threadId} mengirim pesan ${i}`);
        parentPort.postMessage(`${i}`);
    }
    parentPort.close();
});