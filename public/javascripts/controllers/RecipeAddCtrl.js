app.controller("RecipeAddCtrl", function($location, $routeParams, $scope, RecipeFactory){

$scope.newStep = {};
$scope.editMode = false;

	$scope.addNewStep = (id) => {
		$scope.newStep.bread_id = $routeParams.breadid;
		RecipeFactory.postNewStep($scope.newStep).then(() => {
			$location.url(`bread/view/${$scope.newStep.bread_id}`);
		}).catch((error) => {
			console.log("addStep", error);
		});
	};

	$scope.selectedStep = {};
	$scope.steps = [];
	let getSteps = () => {
		RecipeFactory.getRecipeList($routeParams.breadid).then((stepz) => {
			$scope.steps = stepz;
		}).catch((error) => {
			console.log("get error", error);
		});
	};
	getSteps();

});