import React from "react";
import { Item, MovieLink, MovieImage, MovieName, ImageThumb } from "./MovieItem.styled";

const MovieItem = ({ route, title, posterPath, backdropPath }) => {
	return (
		<Item>
			<MovieLink to={route}>
				<ImageThumb>
					<MovieImage src={`https://image.tmdb.org/t/p/w500${backdropPath || posterPath}`} alt={title} />
				</ImageThumb>
				<MovieName>{title}</MovieName>
			</MovieLink>
		</Item>
	);
};

export default MovieItem;
