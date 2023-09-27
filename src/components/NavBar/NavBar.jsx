import React from "react";
import { NavMenu, NavItem, StyledLink } from "./NavBar.styled";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";

const NavBar = () => {
	return (
		<NavMenu>
			<NavItem>
				<StyledLink to='/'>
					<BiHomeAlt2 size={20} /> Home
				</StyledLink>
			</NavItem>
			<NavItem>
				<StyledLink to='movies'>
					<MdLocalMovies size={20} /> Movies
				</StyledLink>
			</NavItem>
		</NavMenu>
	);
};

export default NavBar;
