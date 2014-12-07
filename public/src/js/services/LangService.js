angular.module('app').factory('LangService', ['$window', function($window){
	var defaultLanguage = 'en';
	var allowedLanguages = ['en', 'bg'];
	return {
		get: function(){
			if($window.localStorage.lang){
				return $window.localStorage.lang;
			}
			return defaultLanguage;
		},
		set: function(lang){
			for(var i=0; i < allowedLanguages.length; i++){
				if(allowedLanguages[i] == lang){
					$window.localStorage.lang = lang;
					return;	
				}
			}
			return;
		}
	};
}]);