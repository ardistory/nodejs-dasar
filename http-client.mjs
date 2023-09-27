import https from 'https';

const url = 'https://eoi3xhdqmisht38.m.pipedream.net';

const serverRequest = https.request(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.log(data.toString());
    });
});

serverRequest.write(JSON.stringify({
    namaDepan: "Ardi",
    namaBelakang: "Putra"
}));

serverRequest.end();