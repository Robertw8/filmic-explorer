import React, { useState, useEffect } from "react";
import { NavMenu, NavItem } from "./NavBar.styled";

import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState("/");
	const location = useLocation();

	const handleChange = (e, newValue) => {
		navigate(newValue, { state: newValue });
		setValue(newValue);
	};

	useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	return (
		<NavMenu value={value} onChange={handleChange}>
			<NavItem label='Home' value='/' icon={<HomeIcon />} color='secondary' />
			<NavItem label='Movies' value='/movies' icon={<LocalMoviesIcon />} />
		</NavMenu>
	);
};

export default NavBar;
