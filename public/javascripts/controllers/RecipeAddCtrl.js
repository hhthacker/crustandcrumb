app.controller("RecipeAddCtrl", function($location, $routeParams, $scope, RecipeFactory){

$scope.newStep = {};
$scope.editMode = false;

	$scope.addNewStep = (id) => {
		$scope.newStep.bread_id = $routeParams.breadid;
		console.log("new step", $scope.newStep);
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
			console.log("steps", $scope.steps);
		}).catch((error) => {
			console.log("get error", error);
		});
	};
	getSteps();

});