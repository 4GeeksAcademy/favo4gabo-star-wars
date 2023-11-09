import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Context } from "../store/appContext";

function PeopleDetail () {

    const {id} = useParams()
    const {store} = useContext(Context)
    const [detail,setDetail] = useState({})

    function searchDetail(){
        let result = store.people.find((item) => item._id == id) 
        setDetail(result)
    }
    
    useEffect(() => {searchDetail()}, [store.people])
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center ">
            <h1>{detail?.properties?.name}</h1>
            <p>Soy people detail</p>
            </div>
        </div>
        </>
    )
}

export default PeopleDetail