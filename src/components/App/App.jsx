import React from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import NotFound from "../../pages/NotFound";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { Cast } from "../../components/Cast/Cast";
import { Reviews } from "../../components/Reviews/Reviews";

import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";

export const App = () => {
	return (
		<>
			<Global styles={globalStyles} />
			<Routes>
				<Route path='/goit-react-hw-05-movies/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='movies' element={<Movies />} />
					<Route path='movies/:productId/*' element={<MovieDetails />}>
						<Route path='cast' element={<Cast />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};
