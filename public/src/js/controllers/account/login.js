angular.module('app').controller('AccountLoginCtrl', ['$scope', '$location', 'AccountService', 'TokenService', 'AuthService', function($scope, $location, AccountService, TokenService, AuthService){
	$scope.errors = [];
	$scope.login = function(){

		AccountService.login($scope.user)
		.then(function(data){
			TokenService.setToken(data.token);
			AuthService.setUsername(data.username);
			AuthService.setId(data._id);
			$location.path('/');
		},function(data){
			$scope.errors = data;
		});

	};

}]);