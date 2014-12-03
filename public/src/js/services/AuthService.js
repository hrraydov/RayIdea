angular.module('app').factory('AuthService', ['$window', function($window){
	return {
		isAuthenticated: function(){
			if($window.sessionStorage.token){
				return true;
			}
			return false;
		},
		getUsername: function(){
			return $window.sessionStorage.username;
		},
		setUsername: function(username){
			$window.sessionStorage.username = username;
		},
		deleteUsername: function(){
			delete $window.sessionStorage.username;
		}
	};
}]);