app.factory("RecipeFactory", function($http, $q, FIREBASE_CONFIG) {

	let getSingleStep = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/steps/${id}.json`)
				.then((resultz) => {
					resultz.data.id = id;
					resolve(resultz);
				}).catch((error) => {
				reject(error);
				});
		});
	};

	let editStep = (step) => {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/steps/${steps.id}.json`,
				JSON.stringify({
					name: step.name,
					details: step.details,
					duration_minutes: step.duration_minutes,
					order: step.order,
					bread_id: step.breadid
				})
			).then((resultz) => {
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};



	return { getSingleStep:getSingleStep, editStep:editStep };
});