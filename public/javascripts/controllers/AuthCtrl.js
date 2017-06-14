app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory) {
	$scope.auth = {
		email: "a@a.com",
		password: "111111"
	};

	let logMeIn = () => {
		AuthFactory.authenticate($scope.auth).then((userCreds) => {
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
			console.log("authenticate error", error);
		}).then((user) => {
			$rootScope.user = user;
			$location.url('/bread/list');
		}).catch((error) => {
			console.log("getUser error", error);
		});
	};
	
	$scope.loginUser = () => {
		logMeIn();
	};



});