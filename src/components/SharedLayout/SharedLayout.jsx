import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Container } from "../../styles/globalStyles";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import BackButton from "../BackButton/BackButton";

const SharedLayout = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const location = useLocation();
	const isOnHomePage = location.pathname === "/";

	return (
		<>
			<Container>
				<Header>
					<BackButton onClick={() => goBack()} isDisabled={isOnHomePage} />
					<NavBar />
				</Header>
			</Container>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default SharedLayout;
