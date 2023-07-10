const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {

			getPeople: () => {
				fetch("https://swapi.dev/api/people")
					.then(response => response.json())
					.then(data => {	setStore({ people: data.results });
					})
					.catch(error => console.log(error));
			},


			
			
		}
	};
};

export default getState;