import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/BackButton/BackButton";
const Cast = lazy(() => import("../../components/Cast/Cast"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

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
  const location = useLocation();
  const backRoute = location.state?.from ?? "/";
  const defaultImg =
    "https://placehold.co/600x400/lightpurple/white?text=No Image Given";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movie = await getMovieDetails(movieId);
      setCurrentMovie(movie);
    };

    fetchMovieDetails();
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = currentMovie;
  console.log(location.state?.from);

  return (
    <>
      {currentMovie && (
        <>
          <MovieDetailsWrapper>
            <BackButton
              onClick={() =>
                navigate(backRoute.includes("/movies") ? "/movies" : "/")
              }
            />
            <ImageThumb>
              <MovieImage
                src={
                  `https://image.tmdb.org/t/p/w500${poster_path}` || defaultImg
                }
                width={400}
                height={400}
                alt={title}
                style={{ width: 400, height: 400 }}
              />
            </ImageThumb>
            <MovieContent>
              <MovieTitle>{title}</MovieTitle>
              <MovieText elevation={2}>
                User Score: {formatNumber(vote_average)}{" "}
              </MovieText>
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
                <StyledButton
                  onClick={() =>
                    navigate("cast", { state: { from: backRoute } })
                  }
                  variant="contained"
                >
                  <MovieIcon /> Cast
                </StyledButton>
                <StyledButton
                  onClick={() =>
                    navigate("reviews", { state: { from: backRoute } })
                  }
                  variant="contained"
                >
                  <ReviewsIcon /> Reviews
                </StyledButton>
              </LinksWrapper>
            </MovieContent>
          </MovieDetailsWrapper>
          <Suspense fallback={<Loader top="70%" />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
