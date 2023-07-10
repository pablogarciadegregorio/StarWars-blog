const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets:[],
			singlePlanets:{},
			singlePeople: {}
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



		}
	};
};

export default getState;
