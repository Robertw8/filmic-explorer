import React from "react";
import { StyledButton, BackIcon } from "./BackButton.styled";

const BackButton = ({ onClick, isDisabled }) => {
	return (
		<StyledButton onClick={onClick} disabled={isDisabled} variant='outlined'>
			<BackIcon /> Go back
		</StyledButton>
	);
};

export default BackButton;
