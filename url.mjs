import { URL } from 'url';

const ars = new URL('http://ardistory.us.to/chat?id=1');

ars.host = 'ardiputra.com'; //mengubah

console.log(ars.href);
console.log(ars.protocol);
console.log(ars.host);
console.log(ars.pathname);
console.log(ars.searchParams);