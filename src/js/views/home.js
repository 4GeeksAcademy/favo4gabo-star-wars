import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom"

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
                  <Link to={`/people/${item._id}`} className="btn btn-primary">Learn more</Link>

                </div>
              </div>
            )
          }
          )}
        </div>
      </div>

      <div className="container">
        <h1 className="text-danger">Planets</h1>
        <div className="my-carrousel">
          {store.planets.map((item) => {
            return (
              <div key={item._id} className="my-card">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {item.properties?.name} </h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  {/* <Link to={`/planets/${item._id}`} className="btn btn-primary">Learn more</Link> -----> OJO */}
                </div>
              </div>)
          })}
        </div>
      </div>

      <div className="container">
        <h1 className="text-danger">Vehicles</h1>
        <div className="my-carrousel">
          {store.vehicles.map((item) => {
            return (
              <div key={item._id} className="my-card">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {item.properties?.name} </h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" className="btn btn-primary">Learn more</a>
                </div>
              </div>)
          })}
        </div>
      </div>
    </>)
};
