//Define and require all the things!
//socket.broadcast.emit sends message to everyone except for socket that starts message
var express = 		require('express');
var app = 			express();
var server = 		require('http').createServer(app);
var io = 			require('socket.io')(server);
//var mongoose = 	require('mongoose');
var bodyParser = 	require('body-parser');
var passport = 		require('passport');
var port = 			process.env.PORT || 9001;
var moment = 		require('moment');


server.listen(port, function () {
  console.log('Our server is running on a port that is over 9000!.....It\'s 9001');
});


// Routing - directs to the chat folder.
app.use(express.static(__dirname + '/chat'));

//Socket event, when somebody connects
io.on('connection', function (socket) {

	socket.on('user connected', function(username){
		console.log(username + ' has connected');

		socket.emit('user connected', username);
	})

	socket.on('hello', function(data){
		console.log('hello server');

		socket.emit('hello client');
	});

	socket.on('add user', function(username){
		console.log('Got user ' + username);

		socket.emit('add user', username);
	});

	socket.on('get userList', function(userList){
		console.log('UserList is ' + userList);

		socket.emit('get userList', userList);
	});

	socket.on('remove user', function(username){
		console.log('Removed User ' + username);

		socket.emit('remove user', username);
	});

	socket.on('user joined', function(username){
		console.log(username + ' joined');

		socket.emit('user joined', username);
	});

	socket.on('user left', function(username){
		console.log(username + ' left');

		socket.emit('user left', username);
	});

	socket.on('typing', function(username, message){
		console.log(username + ' ' + message);

		socket.emit('typing', username, message);
	});

	socket.on('timestamp', function(time){
		time(moment().format('MMMM Do YYYY, h:mm:ss a'));
  		console.log(time);

  		socket.emit('timestamp', time);
	});

});