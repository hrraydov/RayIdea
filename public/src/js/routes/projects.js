angular.module('app').config(['$routeProvider', function($routeProvider){
	$routeProvider	
	.when('/projects/my', {
		controller: 'ProjectsMyCtrl',
		templateUrl: '/views/projects/my.html'
	})
	.when('/projects/create', {
		controller: "ProjectsCreateCtrl",
		templateUrl: '/views/projects/create.html'
	})
	.when('/projects/:id', {
		controller: 'ProjectsShowCtrl',
		templateUrl: '/views/projects/show.html'
	});
}]);