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
	<div className="characters m-auto">
		<h1 className="text-danger mb-2">Characters</h1>
		<div className="slider mb-2 ">
				{store.people.map((item) => (
				<Card 
				uid={item.uid}
				name={item.name}
				key={item.uid}/>))}					
		</div>
		<h1 className="text-danger mb-2 mt-2">Planets</h1>
		<div className="slider2 ">
				{store.planets.map((item) => (
				<PlanetCard
				uid={item.uid}
				name={item.name}
				key={item.uid}/>))}
				
			
			
		</div>
	</div>
	);
}

