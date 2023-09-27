import fs from 'fs/promises';

const buffer = await fs.readFile('file-system.mjs');
console.info(buffer.toString());

fs.writeFile('tempt.mjs', buffer.toString());