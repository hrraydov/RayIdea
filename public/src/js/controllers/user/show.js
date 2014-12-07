angular.module('app').controller('UserShowCtrl', ['$scope', '$routeParams', '$location', 'UserService', 'AuthService', function($scope, $routeParams, $location, UserService, AuthService){
	var loadProfile = function(){
		UserService
		.getByUsername($routeParams.username)
		.then(function(data){
			console.log(data);
			$scope.profile = data.profile;
			$scope.username = data.username;
			$scope.skills = data.skills;
			$scope.profile.name.full = data.profile.name.full;
		}, function(data){
			if(data.statusCode == 404){
				$scope.profileNotFound = true;
			}
		});
	};

	$scope.profileNotFound = false;
	$scope.activeTab = 'information';
	$scope.currentProfile = $routeParams.username === AuthService.getUsername();

	console.log($routeParams.username === AuthService.getUsername());

	$scope.openTab = function(tab){
		$scope.activeTab = tab;
	};

	loadProfile();
}]);