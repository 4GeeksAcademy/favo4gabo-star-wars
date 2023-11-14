import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetsDetail() {

    const { id } = useParams()
    const { store } = useContext(Context)
    const [detalle, setDetalle] = useState({})

    function buscarDetalle() {
        let resultado = store.planets.find((item) => item._id == id)
        setDetalle(resultado)
    }

    useEffect(() => { buscarDetalle() }, [store.planets])
    return (
        <>
            <div className="container my-container text-dark">
                <div className="d-flex justify-content-center ">
                    <div className="p-3">
                        <img src={`https://picsum.photos/800/600`} className="card-img-top" alt="..." />
                    </div>
                    <div className="p-3">
                        {/* ? la primera vez que de undefined, se espera no explote a la primera */}
                        <h1>{detalle?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat officia eum laborum facere ipsa beatae corporis et? Architecto, iusto.</p>
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-around border-top border-danger text-danger">
                    <div className="border-start border-end border-danger p-2">
                        <p className="card-text">Climate:</p>
                        <p>{detalle?.properties?.climate}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Terrain:</p>
                        <p>{detalle?.properties?.terrain}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Diameter:</p>
                        <p>{detalle?.properties?.diameter}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Orbital period:</p>
                        <p>{detalle?.properties?.orbital_period}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Rotation period:</p>
                        <p>{detalle?.properties?.rotation_period}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Population:</p>
                        <p>{detalle?.properties?.population}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetsDetail