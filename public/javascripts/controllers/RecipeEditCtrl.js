app.controller("RecipeEditCtrl", function($location, $routeParams, $scope, RecipeFactory) {
	$scope.newStep = {};

	RecipeFactory.getSingleStep($routeParams.id).then((results) => {
		console.log("results", results);
		$scope.newStep = results.data;
	}).catch((error) => {
		console.log("getSingleStep", error);
	});

	$scope.addNewStep = (id) => {
		RecipeFactory.editStep($scope.newStep).then(() => {
			$location.url(`/recipe/${id}`);
		}).catch((error) => {
			console.log("editStep", error);
		});
	};

	$scope.saveStepEdit = (id) => {
		RecipeFactory.editStep($scope.newStep).then(() => {
			console.log("edit step", $scope.newStep);
			$location.url(`/steps/${id}`);
		}).catch((error) => {
			console.log("edit step", error);
		});
	};

	$scope.deleteOneStep = (id) => {
		RecipeFactory.deleteStep(id).then(() => {
			console.log("delete step ctrl", id);
			$location.url(`/bread/view/${id}`);
		}).catch((error) => {
			console.log("delete one step", error);
		});
	};

});