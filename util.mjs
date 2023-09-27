import util from 'util';

const namaDepan = 'Ardi';
const namaBelakang = 'Putra';

console.log(util.format('%s %s', namaDepan, namaBelakang));


const Person = { namaDepan, namaBelakang };
console.log(util.format('String Person : %j', Person));