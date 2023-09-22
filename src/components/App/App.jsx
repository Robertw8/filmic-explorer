import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Movies } from "../../pages/Movies";
import { NavBar } from "../NavBar/NavBar";

import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";

export const App = () => {
	return (
		<div className='container'>
			<Global styles={globalStyles} />
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies />} />
			</Routes>
		</div>
	);
};
