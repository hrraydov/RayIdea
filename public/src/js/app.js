var app = angular.module('app', ['ngRoute', 'ui.slider']);

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
	.when('/profile', {
		controller: 'ProfileEditCtrl',
		templateUrl: '/views/profile/edit.html'
	})
	.when('/skills', {
		controller: 'SkillsEditCtrl',
		templateUrl: '/views/skills/edit.html'
	})
	.when('/user/:username', {
		controller: 'UserShowCtrl',
		templateUrl: '/views/user/show.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	$httpProvider.interceptors.push('TokenInterceptor');
}]);