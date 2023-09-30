import React from "react";
import { StyledButton, BackIcon } from "./BackButton.styled";

const BackButton = ({ onClick }) => {
	return (
		<StyledButton onClick={onClick} variant='outlined'>
			<BackIcon /> Go back
		</StyledButton>
	);
};

export default BackButton;
