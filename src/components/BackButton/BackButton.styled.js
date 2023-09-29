import styled from "@emotion/styled";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
	width: 100px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;

	font-family: "Roboto", sans-serif;
	font-size: 12px;
	font-weight: 700;
	white-space: nowrap;
	color: #eee7fe;

	background-color: #c2a8fa;
	border-radius: 10px;
`;

const BackIcon = styled(ReplyAllIcon)`
	width: 20px;
	height: 20px;
`;

export { StyledButton, BackIcon };
