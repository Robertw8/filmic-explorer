import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, [navigate]);

	return <div>Page not found, redirecting to homepage...</div>;
};

export default NotFound;
