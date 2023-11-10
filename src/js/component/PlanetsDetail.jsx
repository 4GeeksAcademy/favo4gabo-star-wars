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
            <div className="container">
                <div className="d-flex justify-content-center ">
                    <div>
                        <img src={`https://picsum.photos/800/600`} className="card-img-top" alt="..." />
                    </div>
                    <div>
                        <h1>{detalle?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat officia eum laborum facere ipsa beatae corporis et? Architecto, iusto.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetsDetail