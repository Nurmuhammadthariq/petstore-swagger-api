const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'YOUR_MYSQL_LOCALHOSY',
  user: 'YOUR_MYSQL_USER',
  password: 'YOUR_MYSQL_PASSWORD',
  database: 'YOUR_MYSQL_DATABASE',
});

module.exports = db;
