import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
						<img className="SWlogo ms-5" src="https://seeklogo.com/images/S/Star_Wars-logo-BF51C9BC8D-seeklogo.com.png"></img>
			
			<div className="dropdown">
				<a className="btn btn-primary dropdown-toggle me-5 " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="badge rounded-pill bg-danger ms-1">3</span>  
					  
				</a>
				

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<li><a className="dropdown-item" href="#">Acción</a></li>
					<li><a className="dropdown-item" href="#">Otra acción</a></li>
					<li><a className="dropdown-item" href="#">Algo más aqui</a></li>
				</ul>
			</div>
			
		</nav>
	);
};
