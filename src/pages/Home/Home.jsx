import React, { useState, useEffect } from "react";
import { MoviesList } from "./MoviesList/MoviesList";

import { getTrendingMovies } from "../../api/getTrendingMovies";

export const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = async () => {
		const response = await getTrendingMovies();
		const movies = response.results;

		setMovies(movies);
	};

	return <>{movies && <MoviesList movies={movies} />}</>;
};
