import React from "react";
import { StyledButton, LinksWrapper } from "./MovieLinks.styled";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate, useLocation } from "react-router-dom";

const MovieLinks = () => {
  const location = useLocation();
  const backRoute = location.state?.from ?? "/";
  const navigate = useNavigate();

  return (
    <LinksWrapper>
      <StyledButton
        onClick={() => navigate("cast", { state: { from: backRoute } })}
        variant="contained"
      >
        <MovieIcon /> Cast
      </StyledButton>
      <StyledButton
        onClick={() => navigate("reviews", { state: { from: backRoute } })}
        variant="contained"
      >
        <ReviewsIcon /> Reviews
      </StyledButton>
    </LinksWrapper>
  );
};

export default MovieLinks;
