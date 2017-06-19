app.controller("RecipeAddCtrl", function($location, $http, $routeParams, $q, $scope, FIREBASE_CONFIG, RecipeFactory){
	$scope.addNewStep = (id) => {
		$scope.newStep.bread_id = $routeParams.breadid;
		console.log("new step", $scope.newStep);
		RecipeFactory.postNewStep($scope.newStep).then(() => {
			$location.url(`/bread/view/${$scope.newStep.bread_id}`);
		}).catch((error) => {
			console.log("editStep", error);
		});
	};
});