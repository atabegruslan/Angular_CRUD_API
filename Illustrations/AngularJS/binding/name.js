//var APP = angular.module('APP', []);
//APP.directive('name', function() {

angular.module('name', []).directive('name', function() {
	return {
		scope: true,
		restrict:'E',
		link: function(scope,e,attr) {
			scope.fullName = attr.first + ' ' + attr.last;
		},
		template: "<h1>{{fullName}}</h1>"
	}
});