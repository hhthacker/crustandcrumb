app.factory("BreadFactory", function($http, $q, FIREBASE_CONFIG) {
	let getBreadList = (userId) => {
		let breadz = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/bread.json?orderBy="uid"&equalTo="${userId}"`)
			.then((fbBreads) => {
				let breadCollection = fbBreads.data;
				if(breadCollection !== null) {
					Object.keys(breadCollection).forEach((key) => {
						breadCollection[key].id = key;
						breadz.push(breadCollection[key]);
					});
				}
				resolve(breadz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getSingleBread = (breadid) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/bread/${breadid}.json`)
				.then((resultz) => {
					console.log("getsinglebread", resultz);
					resultz.data.breadid = breadid;
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	let postNewBread = (newBread) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/bread.json`, JSON.stringify(newBread))
				.then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	let deleteBread = (bread) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/bread/${breadid}.json`)
			.then((resultz) => {
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	let editBread = (bread) => {
		return $q((resolve, reject) => {
			console.log("edit bread", bread);
			$http.put(`${FIREBASE_CONFIG.databaseURL}/bread/${bread.breadid}.json`,
				JSON.stringify({
					name: bread.name,
					description: bread.description,
					uid: bread.uid,
					by_loaf: false,
				})
			).then((resultz) => {
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};




	return { getBreadList:getBreadList, getSingleBread:getSingleBread, postNewBread:postNewBread, deleteBread:deleteBread, editBread:editBread };
});