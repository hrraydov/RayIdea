angular.module('app').controller('ChatCtrl', ['$scope', 'AuthService', 'ChatService', function($scope, AuthService, ChatService){
	$scope.message = {};
	$scope.user = {};
	$scope.users = [
		'first',
		'second',
		'hrraydov'
	];

	$scope.openChat = function(user){
		$scope.user = user;
		ChatService.loadChat(AuthService.getUsername(), user);
	};

	$scope.sendMessage = function(){
		ChatService.sendMessage(AuthService.getUsername(), user, $scope.message.content);
	};

	$scope.$on('socket:receiveMessages', function(messages){
		$scope.messages = messages;
	});

	$scope.$on('socket:receiveMessage', function(message){
		$scope.messages.push(message);
	});
}]);