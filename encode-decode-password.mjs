import readline from 'readline';
import process from 'process';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//encode
input.question("Masukan password yang ingin anda encode ke HEX : ", (password) => {
    const passworD = Buffer.from(password, 'utf8');
    const passwordBaru = passworD.toString('hex');

    console.log(`Password Baru : ${passwordBaru}`);
});

//decode
input.question("Masukan HEX yang ingin di decode menjadi UTF-8 : ", (password) => {
    const passworD = Buffer.from(password, 'hex');
    const passwordBaru = passworD.toString('utf8');

    console.log(`${passwordBaru} <- Password`);
    input.close();
});