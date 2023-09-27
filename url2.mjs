import url from 'url';

const endpoint = 'http://localhost/data?token=123';

const data = url.parse(endpoint, true);

console.log(data);