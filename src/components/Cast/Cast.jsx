import React, { useState, useEffect } from "react";
import getMovieCredits from "../../api/getMovieCredits";
import { useParams } from "react-router-dom";

import TableBody from "@mui/material/TableBody";
import { Paper } from "@mui/material";
import { StyledTableContainer, StyledTable, StyledTableHead, StyledTableRow, StyledTableCell } from "./Cast.styled";

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
						<StyledTableCell align='center'>Name</StyledTableCell>
						<StyledTableCell align='center'>Character</StyledTableCell>
					</StyledTableRow>
				</StyledTableHead>
				<TableBody>
					{cast.map(({ id, name, character }) => (
						<StyledTableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
