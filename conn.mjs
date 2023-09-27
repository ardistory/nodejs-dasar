import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "ardi",
    password: "ardi123",
    database: "nodejscrud"
});

connection.connect((err) => {
    if (!err) {
        console.log("Koneksi ke database berhasil!");
    }
});

connection.query("INSERT INTO `data` (nama, password, token) VALUES ('Ardi Putra', 'rahasiabanget123','123')", (err) => {
    if (!err) {
        console.log("Insert data ke DB berhasil!");
    }
});