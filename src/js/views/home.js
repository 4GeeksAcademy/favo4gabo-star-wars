import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context)


  return (
    <>
      <div className="container">
        <h1 className="text-danger">Characters</h1>
        <div className="my-carrousel">
          {store.people.map((item) => {
            return (
              <div key={item._id} className="my-card">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {item.properties.name} </h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="text-center mt-5">
        <h1>Personajes</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">

        </div>
        <h1>Planetas</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {store.planets.map((item) => {
            return (
              <div key={item._id} className="col">
                <div className="card">
                  <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title"> {item.properties?.name} </h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>)
          })}
        </div>
      </div>
    </>)
};
