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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// funcion que se trae todos los people
			// es asincrona porque usamos fetch
			getPeople: async () => {
				let store = getStore
				try {
					// hacemos el fetch de datos para traernos todos los people
					// necesito la url, pero como debo agregarle "people", voy a meterla en literals ``
					//  ${} es la forma de usar variables dentro de estas comillas ``
					let response = await fetch(`${store.url}people`)
					// no sabemos leer lo que nos responde la API, entonces lo traducimos a algo que js pueda leer
					let data = await response.json()

					console.log(data)

				} catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;
