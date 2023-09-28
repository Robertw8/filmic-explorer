import styled from "@emotion/styled";
import { BsBoxArrowLeft } from "react-icons/bs";

const StyledButton = styled.button`
	width: 100px;
	height: 50px;
	border: 2px solid ${({ theme }) => theme.colors.background};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	color: ${({ theme }) => theme.colors.white};
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	font-size: ${({ theme }) => theme.fontSizes.xs};

	background-color: transparent;
	border-radius: 10px;
	transition-duration: ${({ theme }) => theme.transitions.secondary};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.background};
	}
`;

const BackIcon = styled(BsBoxArrowLeft)`
	&:is(:hover, :focus) {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export { StyledButton, BackIcon };
