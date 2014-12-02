angular.module('app').factory('TokenService', ['$window', function($window){
	return {
		getToken: function(){
			return $window.sessionStorage.token;
		},
		setToken: function(token){
			$window.sessionStorage.token = token;
		},
		deleteToken: function(){
			delete $window.sessionStorage.token;
		}
	};
}]);