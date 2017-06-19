app.controller("BreadViewCtrl", function($routeParams, $location, $rootScope, $scope, BreadFactory, IngredientsFactory, RecipeFactory) {
    $scope.selectedBread = {};

    BreadFactory.getSingleBread($routeParams.breadid).then((results) => {
        $scope.selectedBread = results.data;
    }).catch((error) => {
        console.log("getSingleBread", error);
    });

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

    $scope.newIngredient = {};
    $scope.addNewIngredient = () => {
        $scope.newIngredient.bread_id = $routeParams.breadid;
        console.log("new ingredient", $scope.newIngredient);
        IngredientsFactory.postNewIngredient($scope.newIngredient).then(() => {
            $location.url(`/bread/view/${$scope.newIngredient.bread_id}`);
        }).catch((error) => {
            console.log("editIngredient", error);
        });
    };


    $scope.selectedStep = {};
    $scope.steps = [];
    let getSteps = () => {
        RecipeFactory.getRecipeList($routeParams.breadid).then((stepz) => {
            $scope.steps = stepz;
            console.log("steps", $scope.steps);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };
    getSteps();
});
