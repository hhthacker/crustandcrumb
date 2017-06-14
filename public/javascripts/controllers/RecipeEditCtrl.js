app.controller("RecipeEditCtrl", function($location, $routeParams, $scope, RecipeFactory) {
	$scope.newStep = {};

	RecipeFactory.getSingleStep($routeParams.id).then((results) => {
		console.log("results", results);
		$scope.newStep = results.data;
	}).catch((error) => {
		console.log("getSingleStep", error);
	});

	$scope.addNewStep = () => {
		RecipeFactory.editStep($scope.newStep).then(() => {
			$location.url('/bread/edit/recipe/:breadid');
		}).catch((error) => {
			console.log("editStep", error);
		});
	};

});