angular.module('app').controller('HomeCtrl', ['$scope', 'AuthService', function($scope, AuthService){
	$scope.message = "Simple message";
	$scope.isLogged = AuthService.isAuthenticated();
}]);