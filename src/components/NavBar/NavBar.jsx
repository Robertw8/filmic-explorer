import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<ul style={{ display: "flex", gap: "20px" }}>
			<li>
				<NavLink to='/goit-react-hw-05-movies/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='movies'>Movies</NavLink>
			</li>
		</ul>
	);
};
