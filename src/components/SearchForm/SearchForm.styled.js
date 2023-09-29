import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { TextField } from "@mui/material";

const Form = styled.form`
	margin-top: 40px;

	display: flex;
	justify-content: center;
`;

const Input = styled(TextField)`
	width: 300px;
	padding: 5px 10px;

	color: #fff;

	background-color: #eee7fe;
	border-radius: 10px;
`;

const SearchIcon = styled(FiSearch)``;

export { Form, Input, SearchIcon };
