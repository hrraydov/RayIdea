angular.module('app').controller('ProjectsEditCtrl', ['$scope', 'ProjectsService', function($scope, ProjectsService){
	var loadProjects = function(){
		ProjectsService.getAll().then(function(data){
			$scope.projects = data;
		});
	};

	loadProjects();


}]);