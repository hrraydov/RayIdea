angular.module('app').factory('UserService', ['$q', '$http', function($q, $http){
	return {		
		getByUsername: function(username){
			var deferred = $q.defer();

			$http.get('/api/user/' + username)
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