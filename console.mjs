import { createWriteStream } from 'fs';
import { Console } from 'console';

const file = createWriteStream('log.txt');

const log = new Console({
    stdout: file,
    stderr: file
});

log.info('hello world');
log.error('hello world');

const Person = { namaDepan: "Ardi", namaBelakang: "Putra" };
log.table(Person);