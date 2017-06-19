app.controller("BreadViewCtrl", function($routeParams, $location, $rootScope, $scope, BreadFactory, IngredientsFactory, RecipeFactory) {
    
    $scope.selectedBread = {};
    BreadFactory.getSingleBread($routeParams.breadid).then((results) => {
        $scope.selectedBread = results.data;
    }).catch((error) => {
        console.log("getSingleBread", error);
    });

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

    // button for adding new step
    $scope.addNewStep = () => {
        $location.url(`/bread/${$routeParams.breadid}/recipe/new`);
    };

    //button for adding new ingredient
    $scope.addNewIngredient = () => {
        $location.url(`/bread/${$routeParams.breadid}/ingredients/new`);
    };

    // drag and drop of steps
    function $(id) {
        return document.getElementById(id);
    }

    dragula([$('drag-elements')], {
        revertOnSpill: true
    });

});
