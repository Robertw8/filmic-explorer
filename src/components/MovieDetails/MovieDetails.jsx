import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

import getMovieDetails from "../../api/getMovieDetails";
import formatNumber from "../../helpers/formatNumber";

const MovieDetails = () => {
	const [currentMovie, setCurrentMovie] = useState({
		poster_path: "",
		backdrop_path: "",
		title: "",
		overview: "",
		genres: [],
		vote_average: 0,
	});
	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieDetails = async () => {
			const movie = await getMovieDetails(movieId);
			setCurrentMovie(movie);
		};

		fetchMovieDetails();
	}, []);

	const { poster_path, backdrop_path, title, overview, genres, vote_average } = currentMovie;

	return (
		<>
			{currentMovie && (
				<div className='movieDetails'>
					<img
						src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
						width={400}
						height={400}
						alt={title}
						style={{ width: 400, height: 400 }}
					/>
					<h3 className='movieTitle'>{title}</h3>
					<p>User Score: {formatNumber(vote_average)} </p>
					<div>
						<strong>Overview</strong> : {overview}
					</div>
					<div style={{ display: "flex" }}>
						<strong>Genres: </strong>
						<ul style={{ display: "flex", gap: "30px" }}>
							{genres.map(({ name }, index) => (
								<li key={index}>{name}</li>
							))}
						</ul>
					</div>
				</div>
			)}
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

export default MovieDetails;
