var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider', '$provide', function($routeProvider, $httpProvider, $provide){
	$routeProvider
	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: '/views/home.html'
	})
	.when('/register', {
		controller: 'AccountRegisterCtrl',
		templateUrl: '/views/account/register.html'
	})
	.when('/login', {
		controller: 'AccountLoginCtrl',
		templateUrl: '/views/account/login.html'
	})
	.when('/profile/:username', {
		controller: 'ProfileShowCtrl',
		templateUrl: '/views/profile/show.html'
	})
	.when('/profile/edit', {
		controller: 'ProfileEditCtrl',
		templateUrl: '/views/profile/edit.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	$httpProvider.interceptors.push('TokenInterceptor');
}]);