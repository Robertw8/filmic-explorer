import styled from "@emotion/styled";
import { Paper, Card, Button } from "@mui/material";

const MovieDetailsWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const MovieContent = styled(Card)`
	padding: 20px;
	max-width: 40%;

	border-radius: 10px;
	background-color: #4d0dd9;
	overflow: auto;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		padding: 10px;
	}
`;

const ImageThumb = styled(Card)`
	border-radius: 10px;
	padding: 10px;
	background-color: #4d0dd9;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

const MovieImage = styled.img`
	border-radius: 10px;
`;

const MovieTitle = styled.h3`
	color: #f9f9f9;
	text-align: center;
`;

const GenresWrapper = styled.div`
	display: flex;
	align-items: baseline;
	gap: 10px;
`;

const GenresList = styled.ul`
	display: flex;
	gap: 20px;
	margin-top: 5px;
`;

const GenresItem = styled.li``;

const GenreTitle = styled.p`
	font-size: 20px;
`;

const LinksWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 50px;
`;

const MovieText = styled(Paper)`
	display: inline-block;
	margin-top: 20px;
	padding: 10px;

	color: #f9f9f9;

	border-radius: 10px;
	background-color: #0f032b;
	box-shadow: 0 2px 2px 0 #f9f9f9;
`;

const StyledButton = styled(Button)`
	display: flex;
	gap: 10px;
	background-color: #0f032b;
`;

export {
	MovieDetailsWrapper,
	ImageThumb,
	MovieImage,
	MovieTitle,
	MovieText,
	MovieContent,
	GenresList,
	GenresItem,
	GenresWrapper,
	GenreTitle,
	LinksWrapper,
	StyledButton,
};
