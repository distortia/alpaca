var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'wordpress',
      password : 'wordpress',
      database : 'alpaca',
    }
);
 
connection.connect();
 
var queryString = 'INSERT INTO alpaca ( '+ username + ' , ' + email + ' , ' + password + ' );';
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
  
});
 
connection.end();