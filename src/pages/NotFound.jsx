import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, []);

	return <div>Page not found, redirecting to homepage...</div>;
};

export default NotFound;
