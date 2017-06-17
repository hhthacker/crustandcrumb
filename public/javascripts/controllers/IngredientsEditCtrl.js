app.controller("IngredientsEditCtrl", function($location, $routeParams, $scope, IngredientsFactory){

	$scope.newIngredient = {};

	IngredientsFactory.getSingleIngredient($routeParams.ingredientid).then((results) => {
		console.log("results", results);
		$scope.newIngredient = results.data;
	}).catch((error) => {
		console.log("getSingleIngredient", error);
	});

	$scope.addNewIngredient = (id) => {
		IngredientsFactory.editIngredient($scope.newIngredient).then(() => {
			$location.url(`/bread/view/${id}`);
		}).catch((error) => {
			console.log("editIngredient", error);
		});
	};

	$scope.saveIngredientEdit = (id) => {
		IngredinetsFactory.editIngredient($scope.newBread).then(() => {
			console.log("new ingredient", $scope.newIngredient);
			$location.url(`/ingredients/${id}`);
		}).catch((error) => {
			console.log("edit ingredient", error);
		});
	};

	$scope.deleteOneIngredient = (id) => {
		IngredientsFactory.deleteIngredient(id).then(() => {
			console.log("delete ingredient ctrl", id);
			$location.url(`/ingredients/:ingredientid`);
		}).catch((error) => {
			console.log("delete one ingredient", error);
		});
	};


});