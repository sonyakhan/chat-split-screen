var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

// handle socket connections on backend
io.on('connection', function(socket){
  console.log('a user connected');

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });

    // listen for left user typing
    socket.on('left-user-typing', function(data) {
      io.emit('get-left-user-typing', data);
    });

    socket.on('left-user-stopped-typing', function(data) {
      io.emit('get-left-user-stopped-typing', data);
    });

    // listen for right user typing
    socket.on('right-user-typing', function(data) {
      io.emit('get-right-user-typing', data);
    });

    socket.on('right-user-stopped-typing', function(data) {
      io.emit('get-right-user-stopped-typing', data);
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
