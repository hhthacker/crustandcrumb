app.controller("BreadViewCtrl", function($routeParams, $rootScope, $scope, BreadFactory, IngredientsFactory) {
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
            // $scope.selectedIngredient = ingredientz;
            console.log("ingredients", $scope.ingredients);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };
    getIngredients();
});
