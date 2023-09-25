import React from "react";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { Outlet } from "react-router-dom";

const Movies = () => {
	return (
		<>
			<SearchInput />
			<Outlet />
		</>
	);
};

export default Movies;
