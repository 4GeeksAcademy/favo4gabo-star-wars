const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://www.swapi.tech/api/",
			// en estos arrays se van a estar guardando los people, planets, vehicles y favoritos
			people: [],
			planets: [],
			vehicles: [],
			favoritos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			getPeople: () => {
				let store = getStore()
				fetch(`${store.url}people`)
					.then(respuesta => respuesta.json())
					.then(data => {
						for (const people of data.results) {
							fetch(`${store.url}people/${people.uid}`)
								.then(respuesta => respuesta.json())
								.then(data => {
									// lo que le estoy pasando a people es un array
									// ... -> spreed operator cada vez que ejecuta hace una copia y agrega 
									setStore({ people: [...store.people, data.result] })
								})
							// console.log(`${store.url}people/${people.name}`)
							// console.log(`${store.url}people/${people.uid}`)
						}
					})
					.catch(error => console.error(error))
			},

			getPlanets: () => {
				let store = getStore()
				fetch(`${store.url}planets`)
					.then(respuesta => respuesta.json())
					.then(data => {
						for (const planets of data.results) {
							fetch(`${store.url}planets/${planets.uid}`)
								.then(respuesta => respuesta.json())
								.then(data => {
									setStore({ planets: [...store.planets, data.result] })
								})
						}
					})
					.catch(error => console.error(error))
				// console.log(`${store.url}planets`)
			},

			getVehicles: () => {
				let store = getStore()
				fetch(`${store.url}vehicles`)
					.then(respuesta => respuesta.json())
					.then(data => {
						for (const vehicles of data.results) {
							fetch(`${store.url}vehicles/${vehicles.uid}`)
								.then(respuesta => respuesta.json())
								.then(data => {
									setStore({ vehicles: [...store.vehicles, data.result] })
								})
						}
					})
					.catch(error => console.error(error))
				// console.log(`${store.url}planets`)
			},

			// el favorito que va a guardar 
			addFavorite: (favToSave) => {
				let store = getStore()
				// agregar favorito
				setStore({
					// se quedan los favoritos que ya agregue y que agregue aqui
					// y agregar el favorito que estoy mandando
					favoritos: [...store.favoritos, favToSave]
				})
			},

			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// 	fetch
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// },


		}
	};
};

export default getState;
