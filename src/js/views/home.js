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
                  <p className="card-text">Gender: {item.properties?.gender}</p>
                  <p className="card-text">Hair: {item.properties?.hair_color}</p>
                  <p className="card-text">Eye: {item.properties?.eye_color}</p>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <Link to={`/people/${item._id}`} className="btn btn-primary">Learn more</Link>
                      <button onClick={() => actions.addFavorite(item)} type="button" className="btn btn-outline-warning">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                  </div>

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
              <div key={item._id} className="my-card ">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {item.properties?.name} </h5>
                  <p className="card-text">Climate: {item.properties?.climate}</p>
                  <p className="card-text">Terrain: {item.properties?.terrain}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/planets/${item._id}`} className="btn btn-primary">Learn more</Link>
                    <button onClick={() => actions.addFavorite(item)} type="button" className="btn btn-outline-warning">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
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
                  <p className="card-text">Vehicle class: {item.properties?.vehicle_class}</p>
                  <p className="card-text">Cost in credits: {item.properties?.cost_in_credits}</p>
                  <p className="card-text">Manufacturer: {item.properties?.manufacturer}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/vehicles/${item._id}`} className="btn btn-primary">Learn more</Link>
                    <button onClick={() => actions.addFavorite(item)} type="button" className="btn btn-outline-warning">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>)
          })}
        </div>
      </div>
    </>)
};
