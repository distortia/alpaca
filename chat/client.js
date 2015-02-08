$(function() {
	var socket = io();

	socket.emit('hello', function(){

	});

	socket.on('hello client', function(data){
		console.log('hello client');
	});

	function userConnected(){
		username = 'cat';

		socket.emit('user connected', username);

		socket.on('user connected', function(username){
			console.log(username + ' has connected');
		})
	}

	function addUser(){
		username = 'nick'

		socket.emit('add user', username);

		socket.on('add user', function(username){
			console.log('Got user ' + username);
		});
	}

	function removeUser(){
		username = 'nick'

		socket.emit('remove user', username);

		socket.on('remove user', function(username){
			console.log('Removed User ' + username);
		});
	}
	
	function getUserList(){
		userList = ['Nick', 'Darrell', 'Kodie', 'Zac'];

		socket.emit('get userList', userList);

		socket.on('get userList', function(userList){
			console.log('UserList is ' + userList);
		});
	}

	function userJoined(){
		username = 'darrell';

		socket.emit('user joined', username);

		socket.on('user joined', function(username){
			console.log(username + ' joined');
		});
	}

	function userLeft(){
		username = 'jimmy';

		socket.emit('user left', username);

		socket.on('user left', function(username){
			console.log(username + ' left');
		});
	}

	function sendMessage(){
		message = 'Hello world';
		
		socket.emit('send message', message);

		socket.on('send message', function(message){
			console.log(message);
		});
	}
	
	function typing(){
		username = 'nick';
		message = 'is typing';
		
		socket.emit('typing', username, message);

		socket.on('typing', function(username,data){
			console.log(username + ' ' + message);
		});
	}



	//Function calls
	userConnected();
	addUser();
	getUserList();
	removeUser();
	userJoined();
	userLeft();
	sendMessage();
	typing();
});	