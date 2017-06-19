app.controller("RecipeEditCtrl", function($location, $routeParams, $scope, RecipeFactory) {
	$scope.newStep = {};

	RecipeFactory.getSingleStep($routeParams.recipeid).then((results) => {
		console.log("get single step results", results);
		$scope.newStep = results.data;
	}).catch((error) => {
		console.log("getSingleStep", error);
	});

	$scope.saveStepEdit = (id) => {
		RecipeFactory.editStep($scope.newStep).then(() => {
			console.log("edit step", $scope.newStep);
			$location.url(`bread/${routeParams.breadid}/recipe/${id}`);
		}).catch((error) => {
			console.log("edit step", error);
		});
	};

	$scope.deleteOneStep = () => {
		RecipeFactory.deleteStep($routeParams.recipeid).then(() => {
			console.log("delete step ctrl", $routeParams.recipeid);
			$location.url(`/bread/view/${$routeParams.recipeid}`);
		}).catch((error) => {
			console.log("delete one step", error);
		});
	};

	$scope.selectedStep = {};
	$scope.recipe = [];
	let getRecipe = () => {
		RecipeFactory.getRecipeList($routeParams.recipeid).then((receipt) => {
			$scope.recipe = receipt;
			console.log("recipe", $scope.recipe);
		}).catch((error) => {
			console.log("get error", error);
		});
	};
	getRecipe();

});