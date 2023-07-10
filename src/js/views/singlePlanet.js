import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getSinglePlanet(params.theid) //genera un objeto con la propiedad theid. Fetch de ese personaje en concreto
	}, [])


	console.log(store.singlePlanets);
	return (
		<div className="singlePeople m-auto">
			<div className="row">
				<img className="col-6" src="https://www.gammaracionero.es/wp-content/uploads/2016/09/placeholder-800x600.png"></img>
				<div className="col-6 text-center">
					<h1 className="peopleName font-weight-bold">{store.singlePlanets.properties?.name}</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan sem metus, quis fermentum eros pellentesque id. Nullam facilisis et sem nec finibus. Duis purus lectus, laoreet eget felis id, ornare viverra lectus. Praesent sed ligula aliquet, auctor elit et, iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum aliquet ipsum et iaculis. Praesent aliquet justo vitae lectus venenatis placerat vel non arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus a neque eget tellus luctus lacinia non sit amet erat.</p>
				</div>
			</div>
			<hr className="divider text-danger" />
			<div className="properties text-danger row">
				<div className="col-2 text-center">
					<p>Name</p>
					<p>{store.singlePlanets.properties?.name}</p>
				</div>
				<div className="col-2 text-center">
					<p>Population</p>
					<p>{store.singlePlanets.properties?.population}</p>
				</div>
				<div className="col-2 text-center">
					<p>Diameter</p>
					<p>{store.singlePlanets.properties?.diameter}</p>
				</div>
				<div className="col-2 text-center">
					<p>Gravity</p>
					<p>{store.singlePlanets.properties?.gravity}</p>
				</div>
				<div className="col-2 text-center">
					<p>Climate</p>
					<p>{store.singlePlanets.properties?.climate}</p>
				</div>
				<div className="col-2 text-center">
					<p>Terrain</p>
					<p>{store.singlePlanets.properties?.terrain}</p>
				</div>

			</div>


			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
