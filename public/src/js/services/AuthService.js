angular.module('app').factory('AuthService', ['$window', function($window){
	return {
		isAuthenticated: function(){
			if($window.sessionStorage.token){
				return true;
			}
			return false;
		}
	};
}]);