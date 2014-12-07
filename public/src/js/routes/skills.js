angular.module('app').config(['$routeProvider', function($routeProvider){
	$routeProvider	
	.when('/skills', {
		controller: 'SkillsEditCtrl',
		templateUrl: '/views/skills/edit.html'
	});
}]);