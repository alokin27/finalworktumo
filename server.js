var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 8050




app.use(express.static('.'));

app.get('/', function(req, res) { 
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {
  console.log('A user connected');

  socket.on('join', function(username) {
    connectedUsers[socket.id] = username;
    io.emit('user joined', username + ' has joined the chat');
  });
});


server.listen(port, function() {
  console.log('Running on localhost:8050');
});