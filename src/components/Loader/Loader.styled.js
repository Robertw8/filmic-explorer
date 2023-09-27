import styled from "@emotion/styled";
import { ScaleLoader } from "react-spinners";

const StyledLoader = styled(ScaleLoader)`
	position: absolute;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);
`;

export { StyledLoader };
