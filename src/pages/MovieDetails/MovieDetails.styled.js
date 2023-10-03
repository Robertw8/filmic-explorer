import styled from "@emotion/styled";
import { Paper, Card, Button } from "@mui/material";

const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MovieContent = styled(Card)`
  padding: 20px;
  max-width: 40%;

  border-radius: 10px;
  background-color: #4d0dd9;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const MovieTitle = styled.h3`
  color: #f9f9f9;
  text-align: center;
`;

const MovieText = styled(Paper)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px;

  color: #f9f9f9;

  border-radius: 10px;
  background-color: #0f032b;
  box-shadow: 0 2px 2px 0 #f9f9f9;
`;

export { MovieDetailsWrapper, MovieTitle, MovieText, MovieContent };
