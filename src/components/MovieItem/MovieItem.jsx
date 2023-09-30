import React from "react";
import { StyledCard, CardTitle, StyledCardMedia } from "./MovieItem.styled";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ route, title, posterPath, backdropPath }) => {
	const navigate = useNavigate();

	return (
		<StyledCard>
			<CardActionArea onClick={() => navigate(route)}>
				<StyledCardMedia
					component='img'
					image={`https://image.tmdb.org/t/p/w500${backdropPath || posterPath}`}
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
