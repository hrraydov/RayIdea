angular.module('app').factory('AccountService', ['$q', '$http', function($q, $http){
	return {
		register: function(user){

			var deferred = $q.defer();

			$http.post('/api/account/register', user)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return  deferred.promise;
		},
		login: function(user){

			var deferred = $q.defer();

			$http.post('/api/account/login', user)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return  deferred.promise;
		},
		logout: function(){
			var deferred = $q.defer();

			$http.get('/api/account/logout')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		}
	};
}]);