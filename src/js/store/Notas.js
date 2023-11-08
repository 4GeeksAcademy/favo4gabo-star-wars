const getState = ({ getStore, getActions, setStore }) => {
	return {

        store: {
			url: "https://www.swapi.tech/api/",
			// en estos arrays se van a estar guardando los people, planets, vehicles y favoritos
			people: [],
			planets: [],
			vehicles: [],
			favoritos: [],
        },

        actions: {
        // funcion que se trae todos los people
                            // es asincrona porque usamos fetch
            getPeople: async() => {
				console.log("hola people")
				let store = getStore()
				fetch(`${store.url}people`)
					.then(respuesta => respuesta.json())
					.then(data => {
						for (const people of data.results) {
							fetch(`${store.url}people/${people.uid}`)
								.then(respuesta => respuesta.json())
								.then(data => {
									setStore({ people: [...store.people, data.result] })
								})
							// console.log(`${store.url}people/${people.name}`)
							// console.log(`${store.url}people/${people.uid}`)
						}
					})
					.catch(error => console.error(error))
			},
                }        
    }
}