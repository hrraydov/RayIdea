angular.module('app').factory('ProfileService', ['$q', '$http', function($q, $http){
	return {
		edit: function(details){
			var deferred = $q.defer();

			$http.put('/api/profile/edit', details)
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