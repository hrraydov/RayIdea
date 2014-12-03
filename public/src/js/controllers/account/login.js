angular.module('app').controller('AccountLoginCtrl', ['$scope', '$location', 'UserService', 'TokenService', 'AuthService', function($scope, $location, UserService, TokenService, AuthService){
	$scope.errors = [];
	$scope.login = function(){

		UserService.login($scope.user)
		.then(function(data){
			TokenService.setToken(data.token);
			AuthService.setUsername(data.username);
			$location.path('/');
		},function(data){
			$scope.errors = data;
		});

	};

}]);