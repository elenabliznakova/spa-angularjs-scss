app.controller('ProjectCtrl', ['$scope', '$q', '$compile', '$window', '$http',
	function ($scope, $q, $compile, $window, $http) {
		$scope.projectDetails = JSON.parse(localStorage.getItem("ProjectDetails"));
		console.log($scope.projectDetails)
	}
]);
