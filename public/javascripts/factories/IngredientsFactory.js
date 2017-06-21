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

    let getSingleIngredient = (ingredientid) => {
        console.log("ingredientid", ingredientid);
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/ingredients/${ingredientid}.json`)
                .then((resultz) => {
                    resultz.data.id = ingredientid;
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

    let editIngredient = (newIngredient) => {
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/ingredients/${newIngredient.id}.json`,
                JSON.stringify({
                    name: newIngredient.name,
                    amount: newIngredient.amount,
                    unit: newIngredient.unit,
                    bread_id: newIngredient.bread_id
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
