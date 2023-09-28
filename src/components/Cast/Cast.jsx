import React, { useState, useEffect } from "react";
import getMovieCredits from "../../api/getMovieCredits";
import { useParams } from "react-router-dom";

const Cast = () => {
	const [cast, setCast] = useState([]);

	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieCredits = async () => {
			const response = await getMovieCredits(movieId);
			setCast(response.cast);
		};
		fetchMovieCredits();
	}, []);

	return (
		<ul>
			{cast &&
				cast.map(({ id, name, character }) => (
					<li key={id}>
						<p>
							<strong>Name: </strong> {name}
						</p>
						<p>
							<strong>Character: </strong> {character}
						</p>
					</li>
				))}
		</ul>
	);
};

export default Cast;
