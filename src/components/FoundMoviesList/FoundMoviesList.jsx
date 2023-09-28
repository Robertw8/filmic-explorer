import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { List } from "../MoviesList/MoviesList.styled";
import MovieItem from "../MovieItem/MovieItem";

import getMoviesBySearch from "../../api/getMoviesBySearch";

const FoundMoviesList = () => {
	const [foundMovies, setFoundMovies] = useState([]);
	const [searchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);
	const [noMoviesFound, setNoMoviesFound] = useState(false);
	const query = searchParams.get("query");

	useEffect(() => {
		if (!query) return;
		setIsLoading(true);
		setNoMoviesFound(false);

		const fetchMoviesBySearch = async () => {
			const response = await getMoviesBySearch(query);
			const movies = response.results;

			setFoundMovies(movies);
			setIsLoading(false);

			if (movies.length === 0) {
				setNoMoviesFound(true);
			}
		};

		fetchMoviesBySearch();
	}, [query]);

	if (noMoviesFound) {
		return <p>No movies found</p>;
	}

	return (
		<List>
			{!isLoading ? (
				foundMovies.map(({ id, title, poster_path, backdrop_path }) => (
					<MovieItem
						key={id}
						route={`/movies/${id}`}
						title={title}
						posterPath={poster_path}
						backdropPath={backdrop_path}
					/>
				))
			) : (
				<Loader />
			)}
		</List>
	);
};

export default FoundMoviesList;
