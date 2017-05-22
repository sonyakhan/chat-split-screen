var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var users = [];

app.use(express.static(path.join(__dirname, 'public')));

// handle socket connections on backend
io.on('connection', function(socket){
  console.log('a user connected');

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });

    // listen for messages from the client
    socket.on('send-message-left', function(data) {
      // send it back to client
      io.emit('get-message-left', data);
    });

    socket.on('send-message-right', function(data) {
      io.emit('get-message-right', data);
    });

});

server.listen(3000, function() {
    console.log('Magic happens on port 3000');
});
