angular.module('app').controller('ProjectsShowCtrl', ['$scope', '$routeParams', 'AuthService', 'ProjectsService', function($scope, $routeParams, AuthService, ProjectsService){
	$scope.project = {};
	$scope.isOwner = false;
	$scope.isMember = false;

	ProjectsService.getById($routeParams.id).then(function(data){
		$scope.project = data;
		if(AuthService.isAuthenticated && data.owner.account.username == AuthService.getUsername()){
			$scope.isOwner = true;
			$scope.isMember = true;
		}
		if(AuthService.isAuthenticated && data.members.indexOf(AuthService.getId()) != -1){
			$scope.isMember = true;
		}
	});

	$scope.becomeMember = function(){
		ProjectsService.becomeMember($routeParams.id)
		.then(function(data){

		}, function(data){

		});
	};

	$scope.acceptMember = function(user){
		ProjectsService.acceptMember($routeParams.id, user._id)
		.then(function(data){

		}, function(data){

		});
	};

}]);