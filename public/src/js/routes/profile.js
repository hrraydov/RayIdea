angular.module('app').config(['$routeProvider', function($routeProvider){
	$routeProvider	
	.when('/profile', {
		controller: 'ProfileEditCtrl',
		templateUrl: '/views/profile/edit.html'
	});
}]);