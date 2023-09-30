import styled from "@emotion/styled";
import Card from "@mui/material/Card";

const CardsWrapper = styled.div`
	max-width: 70%;

	margin: 50px auto;

	@media screen and (max-width: 768px) {
		max-width: 100%;
	}
`;

const ReviewCard = styled(Card)`
	background-color: #c2a8fa;
	overflow-y: auto;
	border-radius: 10px;

	&:not(:first-of-type) {
		margin-top: 25px;
	}
`;

const ReviewAuthor = styled.p`
	font-size: 24px;
	font-weight: 700;
	color: #0f032b;
`;

const ReviewText = styled.p`
	margin-top: 25px;
	color: #0f032b;
`;

const ReviewLink = styled.a`
	display: block;
	margin-top: 25px;
	padding: 10px;
	border: 1px solid transparent;

	color: #eee7fe;
	background-color: #0f032b;
	border-radius: 10px;
	transition-duration: 300ms;
	overflow: hidden;

	&:hover {
		border-color: #eee7fe;
	}
`;

const NoReviews = styled.p`
	font-size: 18px;
	text-align: center;
`;

export { ReviewCard, ReviewAuthor, ReviewText, ReviewLink, NoReviews, CardsWrapper };
