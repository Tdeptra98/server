var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_api',
});
module.exports = connection;
