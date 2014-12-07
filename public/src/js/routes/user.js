angular.module('app').config(['$routeProvider', function($routeProvider){
	$routeProvider	
	.when('/user/:username', {
		controller: 'UserShowCtrl',
		templateUrl: '/views/user/show.html'
	});
}]);

