import React, { useState, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import { Paper } from "@mui/material";
import {
	StyledTableContainer,
	StyledTable,
	StyledTableHead,
	StyledTableRow,
	StyledTableCell,
	StyledTableImage,
} from "./Cast.styled";
import getMovieCredits from "../../api/getMovieCredits";
import { useParams } from "react-router-dom";
import { NoReviews } from "../Reviews/Reviews.styled";

const Cast = () => {
	const [cast, setCast] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieCredits = async () => {
			const response = await getMovieCredits(movieId);
			setCast(response.cast);

			console.log(response.cast);
		};
		fetchMovieCredits();
	}, [movieId]);

	return (
		<>
			{cast.length ? (
				<StyledTableContainer component={Paper}>
					<StyledTable size='medium' aria-label='cast table'>
						<StyledTableHead>
							<StyledTableRow>
								<StyledTableCell>Photo</StyledTableCell>
								<StyledTableCell>Name</StyledTableCell>
								<StyledTableCell>Character</StyledTableCell>
							</StyledTableRow>
						</StyledTableHead>
						<TableBody>
							{cast.map(({ id, profile_path, name, character }) => (
								<StyledTableRow key={id}>
									<StyledTableCell>
										<StyledTableImage src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
									</StyledTableCell>
									<StyledTableCell>{name}</StyledTableCell>
									<StyledTableCell>{character}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</StyledTable>
				</StyledTableContainer>
			) : (
				<NoReviews style={{ marginTop: "50px" }}>No cast information.</NoReviews>
			)}
		</>
	);
};

export default Cast;
