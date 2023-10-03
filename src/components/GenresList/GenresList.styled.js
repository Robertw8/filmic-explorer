import styled from "@emotion/styled";

const GenresWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const StyledGenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
  margin-top: 5px;
`;

const GenresItem = styled.li``;

const GenreTitle = styled.p`
  font-size: 20px;
`;

export { GenresWrapper, StyledGenresList, GenresItem, GenreTitle };
