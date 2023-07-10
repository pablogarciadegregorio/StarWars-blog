import React, { useContext, useState , useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () =>  {

	const [favorite,setFavorite] = useState([]);
	const {store,actions} = useContext(Context);

	useEffect(() => {
		actions.getPeople();
	}, []);
	console.log(store.people);

	return (
	<div className="characters m-auto">
		<h1 className="text-danger mb-2">Characters</h1>
		<div className="slider ">
				{store.people.map((item) => (
				<Card 
				key={item.uid}/>))}
				
			
			
		</div>
	</div>
	);
}

