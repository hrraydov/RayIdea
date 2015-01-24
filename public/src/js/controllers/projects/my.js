angular.module('app').controller('ProjectsMyCtrl', ['$scope', 'ProjectsService', function($scope, ProjectsService){
	
	var projectsTemplate = function(serviceLoadFunc){
		var self = this;

		self.page = 1;
		self.pages = 1;
		self.projects = [];

		self.load = function(){
			serviceLoadFunc().then(function(data){
				self.projects = data;
			});
		};

		self.delete = function(project){
			ProjectsService.delete(project._id).then(function(data){
				self.load();
			});
		};

		self.cancel = function(project){
			ProjectsService.cancel(project._id).then(function(data){
				self.load();
			});
		};
	};

	$scope.owner = new projectsTemplate(ProjectsService.getOwnerOf);
	$scope.owner.load();
	$scope.candidate = new projectsTemplate(ProjectsService.getCandidateFor);
	$scope.candidate.load();
	$scope.member = new projectsTemplate(ProjectsService.getMemberOf);
	$scope.member.load();
}]);