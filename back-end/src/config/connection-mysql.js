const mysql = require('mysql');

console.log('Get connection !!!');

const connection = mysql.createPool({
  database: 'schedule',
  host: 'localhost',
  user: 'root',
  password: 'db',
});
module.exports = connection;
