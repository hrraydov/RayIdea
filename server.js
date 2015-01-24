var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var passport = require('passport');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(expressValidator({
  customValidators: {
    isValidFacebookProfile: function(url){
      if(!url){
        return true;
      }
      return /^$|^((http|https)(:(\/\/|\\\\))(www\.)?[fF][aA][cC][eE][bB][oO][oO][kK]\.[cC][oO][mM]\/)(.)+$/.test(url);
    }
  }
}));



require('./server/mongoose.js')();
require('./server/passport.js')();
require('./server/routes')(app);

var Message = require('./server/models/Message.js');

var chat = io.of('/chat');

var connected = [];

chat.on('connection', function(socket){

  socket.on('connectRequest', function(username){
    connected[username] = socket;
  });

  socket.on('sendMessage', function(data){
    console.log('Send message: ' + JSON.stringify(data));
    var sender = data.sender;
    var receiver = data.receiver;
    var content = data.content;

    var message = new Message({
      sender: sender,
      receiver: receiver,
      content: content
    });

    message.save(function(err, message){
      if(!!connected[receiver]){
        console.log('receive message: ' + receiver);
        connected[receiver].emit('receiveMessage', message)
      }
    });

  });

  socket.on('loadChat', function(data){
    var username1 = data.username1;
    var username2 = data.username2;

    Message.find({
      $or: [
        {
          sender: username1,
          receiver: username2
        },
        {
          sender: username2,
          receiver: username1
        }
      ]
    },function(err, messages){
      socket.emit('receiveMessages', messages);
    });
  });

  socket.on('disconnect', function(){
    var i = connected.indexOf(socket);
    connected.split(i, 1);
  });

});


http.listen(5678, function(){
  console.log('App running on port: ' + 5678);
});