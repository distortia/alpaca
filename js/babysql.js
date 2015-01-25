var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'nstalus_paca',
      password : 'alpaca',
      database : 'nstalus_alpaca',
      insecureAuth: true,
      }
);
 
connection.connect();