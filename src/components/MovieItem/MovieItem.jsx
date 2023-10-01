import React from "react";
import { StyledCard, CardTitle, StyledCardMedia } from "./MovieItem.styled";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const MovieItem = ({ route, title, posterPath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultImg =
    "https://placehold.co/600x400/lightpurple/white?text=No Image Given";

  return (
    <StyledCard>
      <CardActionArea
        onClick={() => navigate(route, { state: { from: location.pathname } })}
      >
        <StyledCardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${posterPath}` || defaultImg}
          alt={title}
        ></StyledCardMedia>
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default MovieItem;
