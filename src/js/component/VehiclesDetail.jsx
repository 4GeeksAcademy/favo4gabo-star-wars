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
            <div className="container">
                <div className="d-flex justify-content-center ">
                    <div>
                        <img src={`https://picsum.photos/800/600`} className="card-img-top" alt="..." />
                    </div>
                    <div>
                        {/* ? la primera vez que de undefined, se espera no explote a la primera */}
                        <h1>{vehiculo?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat officia eum laborum facere ipsa beatae corporis et? Architecto, iusto.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehiclesDetail
