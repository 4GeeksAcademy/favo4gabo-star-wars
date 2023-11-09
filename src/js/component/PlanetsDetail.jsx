import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetsDetail() {

    const {id} = useParams()
    const {store} = useContext(Context)
    const [detalle,setDetalle] = useState({})

    function buscarDetalle() {
        let resultado = store.planets.find((item) => item._id == id)
        setDetalle(resultado)        
    }

    useEffect(() => {buscarDetalle()}, [store.planets])
    return (
        <>
        <h1>Soy planets detail {detalle?.properties?.name}</h1>
        </>
    )
}

export default PlanetsDetail