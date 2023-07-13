import React, { useContext, useState , useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";

export const Home = () =>  {

	const [favorite,setFavorite] = useState([]);
	const {store,actions} = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
	}, []);
	console.log(store.people);
	console.log(store.planets);

	return (
	<div className="characters m-auto ">
		 <h1 className="text-danger mb-4"><i className="fa-brands fa-jedi-order headerIcon me-2"></i>Characters</h1>
		<div className="slider mb-4 d-flex flex-nowrap overflow-auto">
				{store.people.map((item) => (
				<Card 
				uid={item.uid}
				name={item.name}
				key={item.uid}/>))}					
		</div>
		<h1 className="text-danger mb-4 mt-5"><i className="fa-solid fa-earth-asia headerIcon me-2"></i>Planets</h1>
		<div className="slider2  d-flex flex-nowrap overflow-auto">
				{store.planets.map((item) => (
				<PlanetCard
				uid={item.uid}
				name={item.name}
				key={item.uid}/>))}						
		</div>
	</div>
	);
}

