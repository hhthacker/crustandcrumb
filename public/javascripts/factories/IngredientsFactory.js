app.factory("IngredientsFactory", function($http, $q, FIREBASE_CONFIG) {

	let postNewIngredient = (newIngredient) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/ingredients.json`, JSON.stringify(newIngredient))
				.then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	let editIngredient = (ingredient) => {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/ingredients/${ingredient.id}.json`,
				JSON.stringify({
					name: ingredient.name,
					amount: ingredient.amount,
					unit: ingredient.unit,
					bread_id: ingredient.bread_id
				})
			).then((resultz) => {
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};


	return { postNewIngredient:postNewIngredient, editIngredient:editIngredient };
});