angular.module('app').factory('ProjectsService', ['$q', '$http', function($q, $http){
	return {
		getById: function(id){
			var deferred = $q.defer();

			$http.get('/api/projects/' + id)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		getAll: function(){
			var deferred = $q.defer();

			$http.get('/api/projects')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		getOwnerOf: function(){
			var deferred = $q.defer();

			$http.get('/api/projects/owner-of')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		getCandidateFor: function(){
			var deferred = $q.defer();

			$http.get('/api/projects/candidate-for')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		getMemberOf: function(){
			var deferred = $q.defer();

			$http.get('/api/projects/member-of')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		create: function(project){
			var deferred = $q.defer();

			$http.post('/api/projects', project)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		delete: function(id){
			var deferred = $q.defer();

			$http.delete('/api/projects/' + id)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		becomeMember: function(id){
			var deferred = $q.defer();

			$http.put('/api/projects/' + id + '/become-member')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		cancel: function(id){
			var deferred = $q.defer();

			$http.put('/api/projects/' + id + '/cancel-candidature')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		acceptMember: function(projectId, userId){
			var deferred = $q.defer();

			$http.put('/api/projects/'+ projectId + '/accept-member/' + userId)
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});

			return deferred.promise;
		},
		declineMember: function(projectId, userId){
			var deferred = $q.defer();

			$http.put('/api/projects/'+ projectId + '/decline-member/' + userId)
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