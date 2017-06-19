app.controller("IngredientsAddCtrl", function($location, $routeParams, $scope, FIREBASE_CONFIG, IngredientsFactory) {
    $scope.addNewIngredient = () => {
    	$location.url(`/bread/${$routeParams.breadid}/ingredients/new`);
        // $scope.newIngredient.bread_id = $routeParams.breadid;
        console.log("new ingredient", $scope.newIngredient);
        IngredientsFactory.postNewIngredient($scope.newIngredient).then(() => {
            $location.url(`/bread/view/${$scope.newIngredient.bread_id}`);
        }).catch((error) => {
            console.log("editIngredient", error);
        });
    };
});