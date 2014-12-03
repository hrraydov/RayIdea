angular.module('app').controller('ProfileEditCtrl', ['$scope', 'ProfileService', function($scope, ProfileService){
	var loadUser = function(){
		ProfileService.getCurrent().then(function(data){
			$scope.user = data;
		});
	};

	loadUser();

	$scope.errorMessages = [];

	$scope.edit = function(){
		ProfileService.edit($scope.user)
		.then(function(data){

		}, function(data){
			$scope.errorMessages = [];
			for(var i=0; i<data.errors.length; i++){
				$scope.errorMessages.push(data.errors[i].msg);
			}
		});
	};
}]);