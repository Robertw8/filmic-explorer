import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import { Container } from "../styles/globalStyles";
import FoundMoviesList from "../components/FoundMoviesList/FoundMoviesList";
import Title from "../components/Title/Title";

const Movies = () => {
	return (
		<Container marginTop='100px'>
			<Title>Search movies: </Title>
			<SearchForm />
			<FoundMoviesList />
		</Container>
	);
};

export default Movies;
