app.controller("RecipeEditCtrl", function($location, $routeParams, $scope, RecipeFactory) {
	$scope.newStep = {};
	$scope.editMode = true;

	RecipeFactory.getSingleStep($routeParams.recipeid).then((results) => {
		console.log("results", results);
		$scope.newStep = results.data;
	}).catch((error) => {
		console.log("getSingleStep", error);
	});

	$scope.saveStepEdit = (id) => {
		RecipeFactory.editStep($scope.newStep).then(() => {
			console.log("edit step", $scope.newStep);
			$location.url(`bread/view/${$routeParams.breadid}`);
		}).catch((error) => {
			console.log("edit step", error);
		});
	};

	$scope.deleteOneStep = () => {
		RecipeFactory.deleteStep($routeParams.recipeid).then(() => {
			console.log("delete step ctrl", $routeParams.recipeid);
			$location.url(`/bread/view/${$routeParams.breadid}`);
		}).catch((error) => {
			console.log("delete one step", error);
		});
	};

	$scope.selectedStep = {};
	$scope.steps = [];
	let getSteps = () => {
		RecipeFactory.getRecipeList($routeParams.breadid).then((stepz) => {
			$scope.steps = stepz;
			console.log("steps", $scope.steps);
		}).catch((error) => {
			console.log("get error", error);
		});
	};
	getSteps();

});