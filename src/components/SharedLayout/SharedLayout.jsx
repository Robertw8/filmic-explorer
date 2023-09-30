import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/globalStyles";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const SharedLayout = () => {
	return (
		<>
			<Container>
				<Header>
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
