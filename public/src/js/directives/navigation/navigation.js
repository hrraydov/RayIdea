angular.module('app').directive('navigation', function(){
	return {
		restrict: 'E',
		controller: ['$scope', '$rootScope', '$location', 'AuthService', 'UserService', 'TokenService', function($scope, $rootScope, $location, AuthService, UserService, TokenService){
			
			var checkPath = function(){
				switch($location.path()){
					case '/register': {
						$scope.active = 'register';
						break;
					}
					case '/login': {
						$scope.active = 'login';
						break;
					}
					default: {
						$scope.active = '';
					}
				}
			};
			var checkLoggedIn = function(){
				$scope.isLogged = AuthService.isAuthenticated();
			};

			checkPath();
			checkLoggedIn();

			$scope.logout = function(){
				UserService.logout().then(function(data){
					TokenService.deleteToken();
					$location.path('/');
					checkLoggedIn();
				});
			};

			$rootScope.$on('$routeChangeSuccess', function(){
				checkPath();
				checkLoggedIn();
			});
			
		}],
		templateUrl: 'src/js/directives/navigation/navigation.html'
	};
});