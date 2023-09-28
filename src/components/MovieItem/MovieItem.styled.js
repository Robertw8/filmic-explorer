import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Item = styled.li`
	width: 350px;
	height: 225px;
	transition-duration: ${({ theme }) => theme.transitions.secondary};

	&:hover {
		transform: translateY(-5px);
		box-shadow: -10px 50px 10px 2px ${({ theme }) => theme.colors.accent};
	}
`;

const MovieLink = styled(Link)`
	display: block;
	padding: 5px;

	font-family: "Roboto", sans-serif;
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.white};

	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 10px;
`;

const ImageThumb = styled.div`
	width: 100%;
	height: 225px;
`;

const MovieImage = styled.img`
	border-radius: 10px;
`;

const MovieName = styled.span`
	display: block;
	padding: 5px;

	text-align: center;
`;

export { Item, MovieLink, MovieImage, MovieName, ImageThumb };
