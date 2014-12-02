angular.module('app').controller('ProfileEditCtrl', ['$scope', 'ProfileService', function($scope, ProfileService){
	$scope.edit = function(){
		ProfileService.edit($scope.user)
		.then(function(data){

		});
	};
}]);