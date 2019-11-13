'use strict';

var app = angular
    .module('app', ['ngRoute', 'kendo.directives'])
app.config(function($routeProvider) {
    $routeProvider
        .when("/projects", {
            templateUrl: "views/projects/projects.html",
        })
		.when("/kendogrid", {
			templateUrl: "views/kendogrid/kendogrid.html",
		})
		.when("/projectdetails", {
			templateUrl: "views/projectdetails/projectdetails.html",
		})
        .otherwise({
            redirectTo: '/projects'
        });
});
app.filter('underscoreless', function () {
	return function (input) {
		return input.replace(/_/g, ' ');
	};
});
