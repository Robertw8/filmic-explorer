import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { Container } from "../styles/globalStyles";
import Loader from "../components/Loader/Loader";
import Title from "../components/Title/Title";

import getTrendingMovies from "../api/getTrendingMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTrendingMovies();
      const foundMovies = response.results;

      setMovies(foundMovies);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <Container marginTop="50px">
      <Title>Trending today</Title>
      {!isLoading ? <MoviesList movies={movies} /> : <Loader top="50%" />}
    </Container>
  );
};

export default Home;
