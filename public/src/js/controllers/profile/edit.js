angular.module('app').controller('ProfileEditCtrl', ['$scope', 'ProfileService', function($scope, ProfileService){
	var loadUser = function(){
		ProfileService.get().then(function(data){
			$scope.user = data;
		});
	};

	loadUser();

	$scope.errorMessages = [];
	$scope.successMessages = [];

	$scope.edit = function(){
		ProfileService.edit($scope.user)
		.then(function(data){
			$scope.successMessages.push('Profile edited successfully');
		}, function(data){
			$scope.errorMessages = [];
			for(var i=0; i<data.errors.length; i++){
				$scope.errorMessages.push(data.errors[i].msg);
			}
		});
	};
}]);