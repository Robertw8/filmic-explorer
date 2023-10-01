import styled from "@emotion/styled";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const StyledCard = styled(Card)`
  background-color: #4d0dd9;
  border-radius: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #eee7fe;
`;

const StyledCardMedia = styled(CardMedia)`
  width: 500px;
  height: 700px;
`;

export { StyledCard, CardTitle, StyledCardMedia };
