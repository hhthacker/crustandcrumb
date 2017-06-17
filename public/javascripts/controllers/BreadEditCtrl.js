app.controller("BreadEditCtrl", function($location, $routeParams, $scope, BreadFactory) {
	$scope.newBread = {};
		BreadFactory.getSingleBread($routeParams.breadid).then((results) => {
			console.log("results", results);
			$scope.newBread = results.data;
		}).catch((error) => {
			console.log("getSingleItem", error);
		});

	$scope.saveBreadEdit = (id) => {
		BreadFactory.editBread($scope.newBread).then(() => {
			console.log("new bread", $scope.newBread);
			$location.url(`/bread/view/${id}`);
		}).catch((error) => {
			console.log("editBread", error);
		});
	};

	$scope.deleteWholeLoaf = (bread) => {
		BreadFactory.deleteBread(bread).then(() => {
			console.log("bread ctrl", bread);
			$location.url(`/bread/list`);
		}).catch((error) => {
			console.log("deleteBread", error);
		});
	};



});