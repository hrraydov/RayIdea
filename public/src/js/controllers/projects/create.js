angular.module('app').controller('ProjectsCreateCtrl', ['$scope', '$location', 'ProjectsService', function($scope, $location, ProjectsService){
	$scope.project = {
		type: "public"
	};

	$scope.create = function(){
		ProjectsService.create($scope.project).then(function(data){
			$location.path('/projects/my');
		});
	};
}]);