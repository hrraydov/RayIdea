angular.module('app').directive('messages', function(){
	return {
		restrict: 'E',
		scope: {
			errorMessages: '=errorMessages',
			successMessages: '=successMessages',
			infoMessages: '=infoMessages'
		},
		templateUrl: 'src/js/directives/messages/messages.html'
	};
});