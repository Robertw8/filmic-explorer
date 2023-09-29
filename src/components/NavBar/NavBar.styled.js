import styled from "@emotion/styled";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const NavMenu = styled(BottomNavigation)`
	width: 100%;

	background-color: #c2a8fa;
	border-radius: 10px;
`;

const NavItem = styled(BottomNavigationAction)`
	color: #eee7fe;
`;

export { NavMenu, NavItem };
