import React, { useState, useEffect, Suspense } from "react";
import {
  MovieDetailsWrapper,
  MovieTitle,
  MovieText,
  MovieContent,
} from "./MovieDetails.styled";
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/BackButton/BackButton";
import GenresList from "../../components/GenresList/GenresList";
import { Container } from "../../styles/globalStyles";
import MovieLinks from "../../components/MovieLinks/LinksWrapper";
import MovieImage from "../../components/MovieImage/MovieImage";

import getMovieDetails from "../../api/getMovieDetails";
import formatNumber from "../../helpers/formatNumber";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState({
    poster_path: "",
    title: "",
    overview: "",
    genres: [],
    vote_average: 0,
  });
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backRoute = location.state?.from ?? "/";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setCurrentMovie(movie);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = currentMovie;

  return (
    <>
      {currentMovie && (
        <>
          <MovieDetailsWrapper>
            <BackButton onClick={() => navigate(backRoute)} />
            <MovieImage imgPath={poster_path} title={title} />
            <MovieContent>
              <MovieTitle>{title}</MovieTitle>
              <MovieText elevation={2}>
                User Score: {formatNumber(vote_average)}{" "}
              </MovieText>
              {overview && <MovieText elevation={2}>{overview}</MovieText>}
              <GenresList genres={genres} />
              <MovieLinks />
            </MovieContent>
          </MovieDetailsWrapper>
          <Suspense fallback={<Loader top="100%" />}>
            <Container>
              <Outlet />
            </Container>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
