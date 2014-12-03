angular.module('app').controller('ProfileShowCtrl', ['$scope', '$routeParams', '$location', 'ProfileService', 'AuthService', function($scope, $routeParams, $location, ProfileService, AuthService){
	var loadProfile = function(){
		ProfileService
		.getByUsername($routeParams.username)
		.then(function(data){
			$scope.profile = data;
		}, function(data){
			if(data.statusCode == 404){
				$scope.profileNotFound = true;
			}
		});
	};

	$scope.profileNotFound = false;

	loadProfile();
}]);