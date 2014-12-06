angular.module('app').controller('SkillsEditCtrl', ['$scope', 'SkillsService', function($scope, SkillsService){
	var loadUser = function(){
		SkillsService.get().then(function(data){
			$scope.skills = data;
		});
	};

	loadUser();

	$scope.errorMessages = [];
	$scope.successMessages = [];

	$scope.addSkill = function(){
		$scope.skills.push({name: '', value: 5});
	};

	$scope.save = function(){
		var skillsToAdd = [];
		for(var i=0; i < $scope.skills.length; i++){
			if($scope.skills[i].name !== '' && $scope.skills[i].value >= 0 && $scope.skills[i].value <= 10){
				skillsToAdd.push($scope.skills[i]);
			}
		}
		$scope.skills = skillsToAdd;
		SkillsService.edit(skillsToAdd)
		.then(function(data){
			$scope.successMessages.push('Skills edited successfully');
		}, function(data){
			$scope.errorMessages = [];
			for(var i=0; i<data.errors.length; i++){
				$scope.errorMessages.push(data.errors[i].msg);
			}
		});
	};
}]);