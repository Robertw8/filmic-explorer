import React from "react";
import { List } from "./MoviesList.styled";
import MovieItem from "../MovieItem/MovieItem";

const MoviesList = ({ movies }) => {
	return (
		<List>
			{movies &&
				movies.map(
					({ id, title, poster_path }) =>
						title && <MovieItem key={id} route={`/movies/${id}`} title={title} posterPath={poster_path} />,
				)}
		</List>
	);
};

export default MoviesList;
