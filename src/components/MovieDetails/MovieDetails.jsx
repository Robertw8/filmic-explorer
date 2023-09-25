import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Cast } from "../Cast/Cast";
import { Reviews } from "../Reviews/Reviews";

export const MovieDetails = () => {
	return (
		<>
			<div>MOVIE DETAILS</div>
			<Routes>
				<Route path='cast' element={<Cast />} />
				<Route path='reviews' element={<Reviews />} />
			</Routes>
			<div>
				<Link to='cast'>TO CAST</Link>
			</div>
			<div>
				<Link to='reviews'>TO REVIEWS</Link>
			</div>
		</>
	);
};
