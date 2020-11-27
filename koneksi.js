let mysql = require('mysql');

//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('mysql terkoneksi');
});


module.exports = conn;