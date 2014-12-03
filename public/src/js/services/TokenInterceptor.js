angular.module('app').factory('TokenInterceptor', ['$q', '$location', 'TokenService', 'AuthService', function($q, $location, TokenService, AuthService){
	return {
		request: function (config) {
            config.headers = config.headers || {};
            if (TokenService.getToken()) {
                config.headers.Authorization = 'Bearer ' + TokenService.getToken();
            }
            return config;
        },
 
        requestError: function(rejection) {
            return $q.reject(rejection);
        },
 
        response: function (response) {
            return response || $q.when(response);
        },
 
        responseError: function(rejection) {
            if (rejection !== null && rejection.status === 401 && TokenService.getToken()) {
                TokenService.deleteToken();
                AuthService.deleteUsername();
                $location.path("/login");
            }
 
            return $q.reject(rejection);
        }
	};
}]);