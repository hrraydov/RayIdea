angular.module('app').controller('AccountRegisterCtrl', ['$scope', '$location', 'UserService', 'TokenService', 'AuthService',   function($scope, $location, UserService, TokenService, AuthService){
	$scope.errors = [];
	$scope.register = function(){

		UserService.register($scope.user)
		.then(function(data){
			TokenService.setToken(data.token);
			AuthService.setUsername(data.username);
			$location.path('/');
		},function(data){
			$scope.errors = data;
		});

	};

}]);