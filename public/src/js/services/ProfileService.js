angular.module('app').factory('ProfileService', ['$q', '$http', function($q, $http){
	return {
		edit: function(details){
			var deferred = $q.defer();

			$http.put('/api/profile', details)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		getCurrent: function(){
			var deferred = $q.defer();

			$http.get('/api/profile/current')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		getByUsername: function(username){
			var deferred = $q.defer();

			$http.get('/api/profile/' + username)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data, status){
				deferred.reject({data: data, statusCode: status});
			});

			return deferred.promise;
		}
	};
}]);