import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import {
	MovieDetailsWrapper,
	ImageThumb,
	MovieImage,
	MovieTitle,
	MovieText,
	MovieContent,
	GenresWrapper,
	GenresList,
	LinksWrapper,
	StyledButton,
} from "./MovieDetails.styled";

import getMovieDetails from "../../api/getMovieDetails";
import formatNumber from "../../helpers/formatNumber";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MovieIcon from "@mui/icons-material/Movie";
import Loader from "../Loader/Loader";

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
	const navigate = useNavigate();

	useEffect(() => {
		const fetchMovieDetails = async () => {
			const movie = await getMovieDetails(movieId);
			setCurrentMovie(movie);
		};

		fetchMovieDetails();
	}, [movieId]);

	const { poster_path, backdrop_path, title, overview, genres, vote_average } = currentMovie;

	return (
		<>
			{currentMovie && (
				<>
					<MovieDetailsWrapper>
						<ImageThumb>
							<MovieImage
								src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
								width={400}
								height={400}
								alt={title}
								style={{ width: 400, height: 400 }}
							/>
						</ImageThumb>
						<MovieContent>
							<MovieTitle>{title}</MovieTitle>
							<MovieText elevation={2}>User Score: {formatNumber(vote_average)} </MovieText>
							{overview && <MovieText elevation={2}>{overview}</MovieText>}
							<GenresWrapper>
								<GenresList>
									{genres.map(({ name }, index) => (
										<MovieText key={index} elevation={2}>
											{name}
										</MovieText>
									))}
								</GenresList>
							</GenresWrapper>
							<LinksWrapper>
								<StyledButton onClick={() => navigate("cast")} variant='contained'>
									<MovieIcon /> Cast
								</StyledButton>
								<StyledButton onClick={() => navigate("reviews")} variant='contained'>
									<ReviewsIcon /> Reviews
								</StyledButton>
							</LinksWrapper>
						</MovieContent>
					</MovieDetailsWrapper>
					<Routes>
						<Route
							path='cast'
							element={
								<Suspense fallback={<Loader />}>
									<Cast />
								</Suspense>
							}
						/>
						<Route
							path='reviews'
							element={
								<Suspense fallback={<Loader />}>
									<Reviews />
								</Suspense>
							}
						/>
					</Routes>
				</>
			)}
		</>
	);
};

export default MovieDetails;
