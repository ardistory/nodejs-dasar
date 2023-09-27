import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync('zlib-compress.mjs');
const compress = zlib.gzipSync(source);

fs.writeFileSync('zlib-compress.txt', compress);