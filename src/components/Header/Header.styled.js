import styled from "@emotion/styled";

const StyledHeader = styled.header`
	margin-top: 15px;
	padding: 15px;
	display: flex;
	align-items: center;
	gap: 50px;

	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 15px;
`;

export { StyledHeader };
