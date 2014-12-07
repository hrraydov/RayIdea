angular.module('app').config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/register', {
		controller: 'AccountRegisterCtrl',
		templateUrl: '/views/account/register.html'
	})
	.when('/login', {
		controller: 'AccountLoginCtrl',
		templateUrl: '/views/account/login.html'
	});
}]);