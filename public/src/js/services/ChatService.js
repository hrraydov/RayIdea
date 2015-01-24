angular.module('app').factory('ChatService', ['socketFactory', function(socketFactory){
	var socket = socketFactory({
		ioSocket: io.connect('/chat')
	});

	socket.forward('receiveMessage');
	socket.forward('receiveMessages');

	socket.sendMessage = function(sender, receiver, content){
		socket.emit('sendMessage', {sender: sender, receiver: receiver, content: content});
	};
	socket.loadChat = function(username1, username2){
		socket.emit('loadChat', {username1: username1, username2: username2});
	};
	socket.connectRequest = function(username){
		socket.emit('connectRequest', username);
	};

	return socket;
}]);