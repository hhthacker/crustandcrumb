app.controller("IngredientsEditCtrl", function($location, $routeParams, $scope, IngredientsFactory){

	$scope.newIngredient = {};

	IngredientsFactory.getSingleIngredient($routeParams.id).then((results) => {
		console.log("results", results);
		$scope.newIngredient = results.data;
	}).catch((error) => {
		console.log("getSingleIngredient", error);
	});

	$scope.addNewIngredient = () => {
		IngredientsFactory.editIngredient($scope.newIngredient).then(() => {
			$location.url('/bread/view/:breadid');
		}).catch((error) => {
			console.log("editIngredient", error);
		});
	};
});