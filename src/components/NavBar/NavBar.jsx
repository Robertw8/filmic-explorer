import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<ul style={{ display: "flex", gap: "20px" }}>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='movies'>Movies</NavLink>
			</li>
		</ul>
	);
};
