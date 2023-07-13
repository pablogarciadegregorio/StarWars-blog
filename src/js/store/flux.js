const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			singlePlanets: {},
			singlePeople: {},
			singleStarship: {},
			favorites: []
		},
		actions: {

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ people: data.results });
					})
					.catch(error => console.log(error));
			},

			getSinglePeople: async (id) => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people/" + id)
					const data = await resp.json()
					console.log(data);
					setStore({ singlePeople: data.result });
				}
				catch (error) {
					console.log(error);
				}



			},



			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ planets: data.results });
					})
					.catch(error => console.log(error));
			},



			getSinglePlanet: async (id) => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets/" + id)
					const data = await resp.json()
					console.log(data);
					setStore({ singlePlanets: data.result });
				}
				catch (error) {
					console.log(error);
				}



			},


			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ starships: data.results });
					})
					.catch(error => console.log(error));
			},



			getSingleStarship: async (id) => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/starships/" + id)
					const data = await resp.json()
					console.log(data);
					setStore({ singleStarship: data.result });
				}
				catch (error) {
					console.log(error);
				}



			},












			addToFavorites: (name) => {

				setStore({ favorites: getStore().favorites.concat(name) })

			},

			deleteFromFavorites: (name) => {
				setStore({ favorites: getStore().favorites.filter((element) => element != name) })


			}

		}
	};
};

export default getState;
