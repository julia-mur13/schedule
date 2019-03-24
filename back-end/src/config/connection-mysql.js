const mysql = require('mysql');

console.log('Get connection !!!');

const connection = mysql.createConnection({
  database: 'schedule',
  host: 'localhost',
  user: 'root',
  password: 'connection',
});

connection.connect();

module.exports = connection;
