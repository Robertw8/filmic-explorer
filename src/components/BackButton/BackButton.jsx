import React from "react";
import { StyledButton, BackIcon } from "./BackButton.styled";

const BackButton = ({ onClick, isDisabled }) => {
	return (
		<StyledButton onClick={onClick} disabled={isDisabled}>
			<BackIcon size={20} /> Go back
		</StyledButton>
	);
};

export default BackButton;
