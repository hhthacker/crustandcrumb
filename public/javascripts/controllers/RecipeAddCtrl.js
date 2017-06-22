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

	    // // drag and drop of steps
    $scope.$watch('steps', function(steps) {
        if (steps.length == $scope.stepslength){
                for (var i = 0; i < steps.length; i++) {
                    steps[i].order = i;
                    RecipeFactory.editStep(steps[i]).then(() => {
                        console.log("steps", steps);
                    }).catch((error) => {
                        console.log("edited step error", error);
                    });
                }
        }
    }, true);

});