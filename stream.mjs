import fs from 'fs';

//write
const writer = fs.createWriteStream('output.txt');
writer.write('Ardi\n');
writer.write('Putra\n');
writer.end();

//read
const read = fs.createReadStream('output.txt');
read.addListener('data', (data) => {
    console.log(data.toString());
});