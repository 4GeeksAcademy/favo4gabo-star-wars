import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

function VehiclesDetail() {
    // del context obtengo el store
    const { store } = useContext(Context)
    const { id } = useParams()
    const [vehiculo, setVehiculo] = useState({})

    function buscarDetalle() {
        // find te devuelve el objeto
        const resultado = store['vehicles'].find((item) => item._id == id)
        setVehiculo(resultado)
    }

    // function buscarImagen() {
    //     const imagen = store['vehicles'].find((item) => item._id == id)
    //     setVehiculo(imagen)

    // }

    useEffect(() => { buscarDetalle() }, [store.vehicles])
    return (
        <>
            <div className="container my-container text-dark">
                <div className="d-flex justify-content-center ">
                    <div className="p-3">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo?.uid}.jpg`} className="card-img-top" alt="" />
                    </div>
                    <div className="p-3">
                        {/* ? la primera vez que de undefined, se espera no explote a la primera */}
                        <h1>{vehiculo?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat officia eum laborum facere ipsa beatae corporis et? Architecto, iusto.</p>
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-around border-top border-danger text-danger">
                    <div className="border-start border-end border-danger p-2">
                        <p className="card-text">Vehicle class:</p>
                        <p>{vehiculo?.properties?.vehicle_class}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Cost in credits:</p>
                        <p>{vehiculo?.properties?.cost_in_credits}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Manufacturer:</p>
                        <p>{vehiculo?.properties?.manufacturer}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Cargo capacity:</p>
                        <p>{vehiculo?.properties?.cargo_capacity}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Max atmosphering speed:</p>
                        <p>{vehiculo?.properties?.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehiclesDetail
