const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql_nodejs',
    port: '8889'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connnecting to MySQL database', err)
        return;
    }

    console.log('Connected to MySQL database');
})

app.listen(3000, () => console.log('Server is listening on port 3000!'));