const nama = "Ardi Putra";

const buffer = Buffer.from(nama, 'utf8');

console.log(buffer.toString('base64'));
console.log(buffer.toString('hex'));

const buffer2 = Buffer.from('41726469205075747261', 'hex');
console.log(buffer2.toString('utf8'));