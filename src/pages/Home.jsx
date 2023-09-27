import React, { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";

import { getTrendingMovies } from "../api/getTrendingMovies";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await getTrendingMovies();
			const foundMovies = response.results;

			setMovies(foundMovies);
		};

		fetchMovies();
	}, []);

	return (
		<>
			<span>HOME</span>
			{<MoviesList movies={movies} />}
		</>
	);
};

export default Home;
