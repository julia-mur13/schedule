const mysql = require('mysql');

console.log('Get connection !!!');

const connection = mysql.createPool({
  database: 'schedule',
  host: 'localhost',
  user: 'root',
  password: 'connection',
});
connection.query(`USE ${connection.database}`);

module.exports = connection;
