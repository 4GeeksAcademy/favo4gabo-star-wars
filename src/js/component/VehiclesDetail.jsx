import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

function VehiclesDetail() {
                            // del context obtengo el store
    const {store} = useContext(Context)
    const {id} = useParams()
    const [vehiculo, setVehiculo] = useState({})

    function buscarDetalle() {
                                    // find te devuelve el objeto
        const resultado = store['vehicles'].find((item) => item._id == id)
        setVehiculo(resultado)
    }
    
    useEffect(() => {buscarDetalle()}, [store.vehicles])
    return (
        <>
                                 {/* la primera vez que de undefined, se espere  no explote a la primera */}
        <h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, sed! {vehiculo?.properties?.name}</h1>
        </>
    )
}

export default VehiclesDetail