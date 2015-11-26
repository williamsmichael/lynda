var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
	$scope.author = {
		'name' 		: 'Michael Williams',
		'title'		: 'Developer',
		'company'	: 'mple'
	}
});