app.controller("BreadListCtrl", function($rootScope, $scope, BreadFactory) {
	$scope.breads = [];

	let getBreads = () => {
		BreadFactory.getBreadList($rootScope.user.uid).then((breadz) => {
			$scope.breads = breadz;
		}).catch((error) => {
			console.log("get Error", error);
		});
	};

	getBreads();

});