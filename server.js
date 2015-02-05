//Define and require all the things!

var express = 		require('express');
//var mongoose = 		require('mongoose');
var bodyParser = 	require('body-parser');
var passport = 		require('passport');

//Create the app
var app = express();

//Connect to DB
//mongoose.connect('mongodb://localhost:27017/alpaca');

// Use the body-parser package in our application
// The body parser will let us parse the url-encoded http requests
// The "extended" syntax allows for rich objects and arrays to be encoded into
// the urlencoded format, allowing for a JSON-like experience with urlencoded.
//Which is pretty sweet
app.use(bodyParser.urlencoded({
	extended:true
}));

//Create basic express router 
var router = express.Router();

//Specify chat router to default directory
app.use('chat', router);

//Start Server
app.listen(process.env.PORT|| 9001); 

console.log('Our server is running on a port that is over 9000!.....It\'s 9001');
