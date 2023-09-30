import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/globalStyles";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 1500);
	}, [navigate]);

	return <Container>Page not found, redirecting to homepage...</Container>;
};

export default NotFound;
