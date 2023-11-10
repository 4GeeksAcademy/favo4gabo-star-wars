import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {

	const { store } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							{store.favoritos.map((item) => {
								return (
									<li><a className="dropdown-item" href="#">{item.properties.name}</a></li>
								)
							})}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
