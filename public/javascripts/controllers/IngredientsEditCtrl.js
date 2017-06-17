app.controller("IngredientsEditCtrl", function($location, $routeParams, $scope, IngredientsFactory) {

    $scope.newIngredient = {};

    IngredientsFactory.getSingleIngredient($routeParams.ingredientid).then((results) => {
        console.log("results", results);
        $scope.newIngredient = results.data;
    }).catch((error) => {
        console.log("getSingleIngredient", error);
    });

    $scope.addNewIngredient = (id) => {
        IngredientsFactory.editIngredient($scope.newIngredient).then(() => {
            $location.url(`/bread/view/${id}`);
        }).catch((error) => {
            console.log("editIngredient", error);
        });
    };

    $scope.saveIngredientEdit = (id) => {
        IngredientsFactory.editIngredient($scope.newBread).then(() => {
            console.log("new ingredient", $scope.newIngredient);
            $location.url(`bread/${$routeParams.breadid}/ingredients/${id}`);
        }).catch((error) => {
            console.log("edit ingredient", error);
        });
    };

    $scope.deleteOneIngredient = (id) => {
        IngredientsFactory.deleteIngredient(id).then(() => {
            console.log("delete ingredient ctrl", id);
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
            console.log("ingredients", $scope.ingredients);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };
    getIngredients();


});
