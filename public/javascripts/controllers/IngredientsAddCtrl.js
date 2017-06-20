app.controller("IngredientsAddCtrl", function($location, $routeParams, $scope, IngredientsFactory){

    $scope.newIngredient = {};
    $scope.editMode = false;

    $scope.addNewIngredient = (id) => {
        $scope.newIngredient.bread_id = $routeParams.breadid;
        console.log("new ingredient", $scope.newIngredient);
        IngredientsFactory.postNewIngredient($scope.newIngredient).then(() => {
            $location.url(`/bread/view/${$scope.newIngredient.bread_id}`);
        }).catch((error) => {
            console.log("addIngredient", error);
        });
    };

    $scope.selectedIngredient = {};
    $scope.ingredients = [];
    let getIngredients = () => {
        IngredientsFactory.getIngredientList($routeParams.breadid).then((ingredientz) => {
            $scope.ingredients = ingredientz;
            console.log("ingredients", $scope.ingredients);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };
    getIngredients();

});