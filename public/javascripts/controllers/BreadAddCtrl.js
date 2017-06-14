app.controller("BreadAddCtrl", function($location, $http, $rootScope, $q, $scope, FIREBASE_CONFIG, BreadFactory) {
    $scope.addNewBread = () => {
        $scope.newBread.by_loaf = false;
        $scope.newBread.uid = $rootScope.user.uid;
        BreadFactory.postNewBread($scope.newBread).then((response) => {
            $scope.newBread = {};
            $location.url("/bread/list");
        }).catch((error) => {
            console.log("Add error", error);
        });
    };
});
