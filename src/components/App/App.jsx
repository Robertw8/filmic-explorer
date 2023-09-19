import React from "react";

import { Global } from "@emotion/react";
import { globalStyles } from "../../styles/globalStyles";

export const App = () => {
	return (
		<>
			<Global styles={globalStyles} />
			<div>Movies</div>
		</>
	);
};
