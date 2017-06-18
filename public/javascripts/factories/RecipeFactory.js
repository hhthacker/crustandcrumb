app.factory("RecipeFactory", function($http, $q, FIREBASE_CONFIG) {

    let getRecipeList = (bread_id) => {
        let stepz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/steps.json?orderBy="bread_id"&equalTo="${bread_id}"`)
                .then((fbSteps) => {
                    let recipeCollection = fbSteps.data;
                    if (recipeCollection !== null) {
                        Object.keys(recipeCollection).forEach((key) => {
                            recipeCollection[key].id = key;
                            stepz.push(recipeCollection[key]);
                        });
                    }
                    resolve(stepz);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    let getSingleStep = (recipeid) => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/steps/${recipeid}.json`)
                .then((resultz) => {
                    resultz.data.recipeid = recipeid;
                    resolve(resultz);
                }).catch((error) => {
                    reject(error);
                });
        });
    };

    let editStep = (step) => {
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/steps/${step.stepid}.json`,
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

    let deleteStep = (step) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/steps/${step.id}.json`)
            .then((resultz) => {
                resolve(resultz);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };



    return { getRecipeList:getRecipeList, getSingleStep: getSingleStep, editStep: editStep, deleteStep: deleteStep };
});
