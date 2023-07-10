import React, { useContext, useState , useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () =>  {

	const [favorite,setFavorite] = useState([]);
	const {store,actions} = useContext(Context);

	actions.getPeople();
	console.log(store.people);

	return (
	<div className="characters">
		<h1 className="text-danger">Characters</h1>
		<div className="slider">
				{store.characters.map(item) => (<Card key={item.uid}/>)}
			
			
		</div>
	</div>
	);
}

