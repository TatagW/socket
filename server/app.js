const express = require('express');
var app = require('express')();
const cors = require('cors');
var http = require('http').createServer(app);
const redis = require('socket.io-redis');
var io = require('socket.io')(http);
const router = require('./router');
io.adapter(redis({ host: 'localhost', port: 6379 }));
// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('chat message', function(msg){
//         io.emit('balesan', msg);
//     });
// });
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))  
app.use('/', router)



http.listen(3000, function(){
  console.log('listening on *:3000');
});

