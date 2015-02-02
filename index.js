//This is server side JS
// http://socket.io/docs/#using-with-the-express-framework


// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var moment = require('moment');

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing - directs to the public folder.
app.use(express.static(__dirname + '/public'));

// usernames which are currently connected to the chat
var usernames = {};
var userList = [];
var numUsers = 0;

//=====================================//
//==== Don't Touch above this line ====//


//======== userList functions ========//

//Get's user list Array
function getUserList(){
  console.log("UserList is: " + userList);
}

//Adds the user to the userList array
function addGlobalUser(username){
  console.log("Added: " + username);
  userList.push(username);
}

//Removes specific user from the userList array
function removeGlobalUser(username){
  var index = userList.indexOf(username);
  var removedUser = userList.splice(index, 1);
  console.log("Removed: " + removedUser);
  console.log("New userList is: " + userList);
}

//=====================================//

//Socket event, when somebody connects
io.on('connection', function (socket) {

  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

//====== server -> client functions ======//

  //Returns the user list to the client
  socket.on('user list',function(data){
    getUserList();
    console.log('Got userlist!');
    //this returns userList to client
    data(userList);
  });

  //Adds user to userlist
  //Client to server
  socket.on('add global user',function(username){
    addGlobalUser(username);
  });

  //Removes user from userlist
  //Client to server
  socket.on('remove global user', function(username){
    removeGlobalUser(username);
  });

//=====================================//

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    // we store the username in the socket session for this client
    socket.username = username;
    // add the client's username to the global list
    usernames[username] = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });

    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // remove the username from global usernames list
    if (addedUser) {
      delete usernames[socket.username];
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
});