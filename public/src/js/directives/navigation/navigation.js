angular.module('app').directive('navigation', function(){
	return {
		restrict: 'E',
		controller: ['$scope', '$rootScope', '$location', '$translate', 'AuthService', 'AccountService', 'TokenService', function($scope, $rootScope, $location, $translate, AuthService, AccountService, TokenService){
			
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
					case '/profile/' + $scope.username: {
						$scope.active = 'my-profile';
						break;
					}
					case '/projects': {
						$scope.active = 'projects';
						break;
					}
					default: {
						$scope.active = '';
					}
				}
			};
			var checkIdentity = function(){
				$scope.isLogged = AuthService.isAuthenticated();
				$scope.username = AuthService.getUsername();
			};

			checkPath();
			checkIdentity();

			$scope.logout = function(){
				console.log('Logout');
				AccountService.logout().then(function(data){
					TokenService.deleteToken();
					$location.path('/');
					checkIdentity();
				});
			};

			$scope.changeLanguage = function(lang){
				$translate.use(lang);
			};

			$rootScope.$on('$routeChangeSuccess', function(){
				checkPath();
				checkIdentity();
			});
			
		}],
		templateUrl: 'src/js/directives/navigation/navigation.html'
	};
});