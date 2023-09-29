import React, { useState, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import { Paper } from "@mui/material";
import { StyledTableContainer, StyledTable, StyledTableHead, StyledTableRow, StyledTableCell } from "./Cast.styled";
import getMovieCredits from "../../api/getMovieCredits";
import { useParams } from "react-router-dom";

const Cast = () => {
	const [cast, setCast] = useState([]);
	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieCredits = async () => {
			const response = await getMovieCredits(movieId);
			setCast(response.cast);
		};
		fetchMovieCredits();
	}, [movieId]);

	return (
		<StyledTableContainer component={Paper}>
			<StyledTable size='medium' aria-label='cast table'>
				<StyledTableHead>
					<StyledTableRow>
						<StyledTableCell>Name</StyledTableCell>
						<StyledTableCell>Character</StyledTableCell>
					</StyledTableRow>
				</StyledTableHead>
				<TableBody>
					{cast.map(({ id, name, character }) => (
						<StyledTableRow key={id}>
							<StyledTableCell component='th' scope='row'>
								{name}
							</StyledTableCell>
							<StyledTableCell>{character}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</StyledTable>
		</StyledTableContainer>
	);
};

export default Cast;
