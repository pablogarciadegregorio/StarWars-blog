const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
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




		}
	};
};

export default getState;
