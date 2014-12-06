angular.module('app').factory('SkillsService', ['$q', '$http', function($q, $http){
	return {
		get: function(){
			var deferred = $q.defer();

			$http.get('/api/skills')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		edit: function(data){
			var deferred = $q.defer();

			$http.put('/api/skills', data)
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