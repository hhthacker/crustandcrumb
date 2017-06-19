app.factory("IngredientsFactory", function($http, $q, FIREBASE_CONFIG) {

    let getIngredientList = (bread_id) => {
        let ingredientz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/ingredients.json?orderBy="bread_id"&equalTo="${bread_id}"`)
                .then((fbIngredients) => {
                    let ingredientsCollection = fbIngredients.data;
                    if (ingredientsCollection !== null) {
                        Object.keys(ingredientsCollection).forEach((key) => {
                            ingredientsCollection[key].id = key;
                            ingredientz.push(ingredientsCollection[key]);
                        });
                    }
                    resolve(ingredientz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    let getSingleIngredient = (id) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/ingredients/${id}.json`)
                .then((resultz) => {
                    console.log("getsingleingredient", resultz);
                    resultz.data.ingredientid = ingredientid;
                    resolve(resultz);
                }).catch((error) => {
                    reject(error);
                });
        });
    };

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

    let deleteIngredient = (ingredientid) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/ingredients/${ingredientid}.json`)
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    return { getIngredientList: getIngredientList, getSingleIngredient: getSingleIngredient, postNewIngredient: postNewIngredient, editIngredient: editIngredient, deleteIngredient: deleteIngredient };
});
