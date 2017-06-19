app.controller("IngredientsAddCtrl", function($location, $http, $routeParams, $q, $scope, FIREBASE_CONFIG, IngredientsFactory) {
    $scope.addNewIngredient = () => {
    	$location.url(`/bread/`);
        $scope.newIngredient.bread_id = $routeParams.breadid;
        console.log("new ingredient", $scope.newIngredient);
        IngredientsFactory.postNewIngredient($scope.newIngredient).then(() => {
            $location.url(`/bread/view/${$scope.newIngredient.bread_id}`);
        }).catch((error) => {
            console.log("editIngredient", error);
        });
    };
});