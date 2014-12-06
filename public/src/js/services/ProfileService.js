angular.module('app').factory('ProfileService', ['$q', '$http', function($q, $http){
	return {
		edit: function(data){
			var deferred = $q.defer();

			$http.put('/api/profile', data)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		get: function(){
			var deferred = $q.defer();

			$http.get('/api/profile')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
	};
}]);