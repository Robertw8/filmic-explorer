import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, BackButton } from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { NavBar } from "../../NavBar/NavBar";

export const SharedLayout = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<Header>
			<Container>
				<BackButton onClick={goBack}>Go back</BackButton>
				<NavBar />
			</Container>
			<Outlet />
		</Header>
	);
};
