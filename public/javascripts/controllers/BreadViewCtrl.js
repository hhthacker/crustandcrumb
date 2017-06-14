app.controller("BreadViewCtrl", function($routeParams, $scope, BreadFactory) {
	$scope.selectedBread = {};

	BreadFactory.getSingleBread($routeParams.breadid).then((results) => {
		console.log("results", results);
		$scope.selectedBread = results.data;
	}).catch((error) => {
		console.log("getSingleBread", error);
	});

});
