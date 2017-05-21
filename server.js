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

    socket.on('get-users', function() {
        socket.emit('all-users', users);
    });

    socket.on('disconnect', function() {
      console.log('user disconnected');
    });

});

server.listen(3000, function() {
    console.log('Magic happens on port 3000');
});
