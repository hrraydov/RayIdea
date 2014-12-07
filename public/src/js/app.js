var app = angular.module('app', ['ngRoute', 'ui.slider', 'ui.date', 'ui.sortable', 'ngCookies', 'pascalprecht.translate']);

app.config(['$routeProvider', '$httpProvider', '$translateProvider', function($routeProvider, $httpProvider, $translateProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: '/views/home.html'
	})	
	.otherwise({
		redirectTo: '/'
	});
	
	$translateProvider.preferredLanguage('en');
	$translateProvider.useLocalStorage();

	$httpProvider.interceptors.push('TokenInterceptor');
}]);