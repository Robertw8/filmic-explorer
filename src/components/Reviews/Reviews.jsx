import React, { useState, useEffect } from "react";
import getMovieReviews from "../../api/getMovieReviews";
import { useParams } from "react-router-dom";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	const { movieId } = useParams();

	useEffect(() => {
		const fetchMovieReviews = async () => {
			const response = await getMovieReviews(movieId);
			setReviews(response.results);
		};

		fetchMovieReviews();
	}, []);

	return (
		<ul>
			{reviews.length !== 0 ? (
				reviews.map(({ id, author, content, created_at, url }) => (
					<li key={id}>
						<p>
							<strong>Author: </strong>
							{author}
						</p>
						<p>
							<strong>Content: </strong>
							{content}
						</p>
						<p>
							<strong>Created at: </strong>
							{created_at}
						</p>
						<p>
							<a href={url}>Link</a>
						</p>
					</li>
				))
			) : (
				<p>No reviews given.</p>
			)}
		</ul>
	);
};

export default Reviews;
