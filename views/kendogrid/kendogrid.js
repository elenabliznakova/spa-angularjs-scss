app.controller('KendoGridCtrl', ['$scope', '$q', '$compile', '$window', '$http',
	function ($scope, $q, $compile, $window, $http) {
		var data;
		$http({method : 'GET',url : 'https://gist.githubusercontent.com/elena-gancheva/e2af742be620fefa0b0d81e36f7cd66c/raw/1407c899e0a1baca8cd9564f6d9668fd7e8909a6/data.json'})
			.success(function(result, status) {
				$scope.data = result.projects;
				data = new kendo.data.DataSource({
					data: result.projects,
					schema: {
						model: {
							id: "project",
							fields: {
								title: {
									type: "string",
									validation: {
										required: true
									}
								},
								location_city: {
									type: "string",
									validation: {
										required: true
									}
								},
								publish_date: {
									type: "string",
									validation: {
										required: true
									}
								},
								comments: {
									type: "string",
									validation: {
										required: true
									}
								},
							}
						}
					},
					pageSize: 5
				});
				$scope.gridOptions = {
					dataSource: data,
					selectable: true,
					columns: [
						{ field: "title", title: "Title" },
						{ field: "location_city", title: "location city" },
						{ field: "publish_date", title: "publish date" },
						{ field: "comments", title: "comments" },
						{
							command: /*"destroy"*/ ["edit", "destroy"],
							title: " ",
							width: "175px",
							editable: "inline"
						}
					],
					filterable: true,
					pageable: true,
					editable: 'inline',
					save: function (){
						console.log('changes saved')
					}
				};

			}).error(function (data) {
			$scope.images = "Request failed";
			$scope.loading = false;
		});
	}
]);
