import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext";

function PeopleDetail() {

    const { id } = useParams()
    const { store } = useContext(Context)
    const [detail, setDetail] = useState({})

    function searchDetail() {
        let result = store.people.find((item) => item._id == id)
        setDetail(result)
    }

    useEffect(() => { searchDetail() }, [store.people])
    return (
        <>
            <div className="container my-container text-dark">
                <div className="d-flex justify-content-center ">
                    <div className="p-3">
                        <img src={`https://picsum.photos/800/600`} className="card-img-top" alt="..." />
                    </div>
                    <div className="p-3">
                        {/* ? la primera vez que de undefined, se espera no explote a la primera */}
                        <h1>{detail?.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat officia eum laborum facere ipsa beatae corporis et? Architecto, iusto.</p>
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-around border-top border-danger text-danger">
                    <div className="border-start border-end border-danger p-2">
                        <p className="card-text">Gender:</p>
                        <p>{detail?.properties?.gender}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Hair:</p>
                        <p>{detail?.properties?.hair_color}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Eye:</p>
                        <p>{detail?.properties?.eye_color}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Height:</p>
                        <p>{detail?.properties?.height}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Mass:</p>
                        <p>{detail?.properties?.mass}</p>
                    </div>
                    <div className="border-end border-danger p-2">
                        <p className="card-text">Skin color:</p>
                        <p>{detail?.properties?.skin_color}</p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default PeopleDetail