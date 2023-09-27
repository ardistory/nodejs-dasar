import fs from 'fs';
import zlib from 'zlib';

const dataCompressed = fs.readFileSync('zlib-compress.txt');
const dataDecompressed = zlib.unzipSync(dataCompressed);

fs.writeFileSync('zlib-decompress.txt', dataDecompressed.toString());