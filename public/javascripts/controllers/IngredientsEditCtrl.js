app.controller("IngredientsEditCtrl", function($location, $routeParams, $scope, IngredientsFactory) {

    $scope.newIngredient = {};
    $scope.editMode = true;

    IngredientsFactory.getSingleIngredient($routeParams.ingredientid).then((results) => {
        $scope.newIngredient = results.data;
    }).catch((error) => {
        console.log("getSingleIngredient", error);
    });

    $scope.saveIngredientEdit = (id) => {
        IngredientsFactory.editIngredient($scope.newIngredient).then(() => {
            $location.url(`bread/view/${$routeParams.breadid}`);
        }).catch((error) => {
            console.log("edit ingredient", error);
        });
    };

    $scope.deleteOneIngredient = () => {
        IngredientsFactory.deleteIngredient($routeParams.ingredientid).then(() => {
            $location.url(`/bread/view/${$routeParams.breadid}`);
        }).catch((error) => {
            console.log("delete one ingredient", error);
        });
    };

    $scope.selectedIngredient = {};
    $scope.ingredients = [];
    let getIngredients = () => {
        IngredientsFactory.getIngredientList($routeParams.breadid).then((ingredientz) => {
            $scope.ingredients = ingredientz;
        }).catch((error) => {
            console.log("get Error", error);
        });
    };
    getIngredients();


});
