import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32" className="rounded float-start" alt="Star Wars Logo" />
				</span>
			</Link>
			<div className="ml-auto">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">						
						<button className="nav-link dropdown-toggle btn btn-warning text-black p-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favoritos.length}
						</button>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							{store.favoritos.map((item) => {
								return (
									<li key={item._id}>
										<a onClick={() => actions.addFavorite(item)} className="dropdown-item" href="#">{item.properties.name}
											<i className="fas fa-trash"></i>
										</a>
									</li>
								)
							})}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
