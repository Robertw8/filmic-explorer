import React from "react";
import {
  GenresWrapper,
  StyledGenresList,
  GenresItem,
} from "./GenresList.styled";
import { MovieText } from "../../pages/MovieDetails/MovieDetails.styled";

const GenresList = ({ genres }) => {
  return (
    <GenresWrapper>
      <StyledGenresList>
        {genres.map(({ name }, index) => (
          <GenresItem key={index}>
            <MovieText elevation={2}>{name}</MovieText>
          </GenresItem>
        ))}
      </StyledGenresList>
    </GenresWrapper>
  );
};

export default GenresList;
