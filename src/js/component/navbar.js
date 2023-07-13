import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Navbar = props => {

	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	function handleDelete(item) {

		actions.deleteFromFavorites(item);
		console.log("");
	}

	function showFavorites() {
		if (store.favorites.length == 0) { return (<li className="text-muted ps-2">No Favorites</li>) }
		else {
			return store.favorites.map((item, index) => (
				<li key={index} className="d-flex align-items-center"><a className="dropdown-item " href="#">{item}</a> <i className="fa-solid fa-trash pe-2" onClick={e => handleDelete(item)}></i></li>
			))
		}

	}

	return (
		<div className="navBackground bg-light">
			<nav className="navbar navbar-light bg-light mb-3 m-auto ">
				<img className="SWlogo ms-0" onClick={e => navigate("/")} src="https://seeklogo.com/images/S/Star_Wars-logo-BF51C9BC8D-seeklogo.com.png"></img>

				<div className="dropdown ">
					<a className="btn btn-primary dropdown-toggle me-0 " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="badge rounded-pill bg-danger ms-1">{store.favorites.length}</span>

					</a>


					<ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuLink">
						{showFavorites()}
						{/* {store.favorites.map((item, index) => (
							<li key={index} className="d-flex align-items-center"><a className="dropdown-item " href="#">{item}</a> <i className="fa-solid fa-trash pe-2" onClick={e => handleDelete(item)}></i></li>
						))} */}
					</ul>
				</div>

			</nav>
		</div>
	);
};
