import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { globalStyles } from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename='/goit-react-hw-05-movies/'>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
