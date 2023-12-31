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
import { NoReviews } from "../Reviews/Reviews.styled";

import getMovieCredits from "../../api/getMovieCredits";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
    "https://placehold.co/600x400/lightpurple/white?text=No Image Given";

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response.cast);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <StyledTableContainer component={Paper}>
          <StyledTable size="medium" aria-label="cast table">
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableCell>Photo</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Character</StyledTableCell>
              </StyledTableRow>
            </StyledTableHead>
            <TableBody>
              {cast.map(
                ({ id, profile_path, name, character }) =>
                  name && (
                    <StyledTableRow key={id}>
                      <StyledTableCell>
                        <StyledTableImage
                          src={
                            profile_path
                              ? `https://image.tmdb.org/t/p/w500${profile_path}`
                              : defaultImg
                          }
                          alt={name}
                        />
                      </StyledTableCell>
                      <StyledTableCell>{name}</StyledTableCell>
                      <StyledTableCell>{character}</StyledTableCell>
                    </StyledTableRow>
                  )
              )}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      ) : (
        <NoReviews style={{ marginTop: "50px" }}>
          No cast information.
        </NoReviews>
      )}
    </>
  );
};

export default Cast;
