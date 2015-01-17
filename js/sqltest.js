var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'paca',
      password : 'alpaca',
      database : 'nstalus_alpaca',
    }
);
 
connection.connect();
 
var queryString = 'SELECT * FROM alpaca';
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log('Users ', rows[i].username);
    }
});
 
connection.end();