angular.module('app').controller('AccountLoginCtrl', ['$scope', '$location', 'UserService', 'TokenService', function($scope, $location, UserService, TokenService){
	$scope.errors = [];
	$scope.login = function(){

		UserService.login($scope.user)
		.then(function(data){
			TokenService.setToken(data.token);
			$location.path('/');
		},function(data){
			$scope.errors = data;
		});

	};

}]);