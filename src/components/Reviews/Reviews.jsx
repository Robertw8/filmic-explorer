import React, { useState, useEffect } from "react";
import {
  CardsWrapper,
  ReviewCard,
  ReviewAuthor,
  ReviewText,
  ReviewLink,
  NoReviews,
} from "./Reviews.styled";
import { CardContent } from "@mui/material";

import getMovieReviews from "../../api/getMovieReviews";
import { useParams } from "react-router-dom";
import formatDate from "../../helpers/formatDate";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const response = await getMovieReviews(movieId);
      setReviews(response.results);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <CardsWrapper>
      {reviews.length ? (
        reviews.map(({ id, author, content, created_at, url }) => (
          <ReviewCard key={id} elevation={10}>
            <CardContent>
              <ReviewAuthor>
                {author} on {formatDate(created_at)}
              </ReviewAuthor>
              <ReviewText>{content}</ReviewText>

              <ReviewLink
                href={url}
                target="_blank"
                rel="noopener norefferer nofollow"
              >
                {url}
              </ReviewLink>
            </CardContent>
          </ReviewCard>
        ))
      ) : (
        <NoReviews>No reviews given.</NoReviews>
      )}
    </CardsWrapper>
  );
};

export default Reviews;
