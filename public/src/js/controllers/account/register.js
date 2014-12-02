angular.module('app').controller('AccountRegisterCtrl', ['$scope', '$location', 'UserService', 'TokenService',   function($scope, $location, UserService, TokenService){
	$scope.errors = [];
	$scope.register = function(){

		UserService.register($scope.user)
		.then(function(data){
			TokenService.setToken(data.token);
			$location.path('/');
		},function(data){
			$scope.errors = data;
		});

	};

}]);