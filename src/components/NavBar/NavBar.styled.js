import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavMenu = styled.ul`
	display: flex;
	gap: 20px;
`;

const NavItem = styled.li``;

const StyledLink = styled(NavLink)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	padding: 10px;

	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.background};
	transition-duration: ${({ theme }) => theme.transitions.secondary};
	border-radius: 10px;

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0px 3px 5px 2px ${({ theme }) => theme.colors.white};
	}
	&.active {
		color: ${({ theme }) => theme.colors.white};
		transform: translateY(-1px);
		box-shadow: 0 3px 6px 3px ${({ theme }) => theme.colors.white};
	}
`;

export { NavMenu, NavItem, StyledLink };
