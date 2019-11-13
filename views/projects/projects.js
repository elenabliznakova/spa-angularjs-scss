app.controller('ProjectsCtrl', ['$scope', '$q', '$compile', '$window', '$http', '$location',
	function ($scope, $q, $compile, $window, $http, $location) {
		$http({method : 'GET',url : 'https://gist.githubusercontent.com/elena-gancheva/e2af742be620fefa0b0d81e36f7cd66c/raw/1407c899e0a1baca8cd9564f6d9668fd7e8909a6/data.json'})
			.success(function(data, status) {
				$scope.projects = data.projects;
			}).error(function (data) {
			$scope.images = "Request failed";
			$scope.loading = false;
		});
		$scope.ShowDetails = function(project) {

			localStorage.setItem("ProjectDetails", JSON
				.stringify(project));

			 $location.path('/projectdetails')
		}
	}
]);
