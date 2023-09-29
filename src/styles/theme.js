import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#4d0dd9",
			light: "#c2a8fa",
			dark: "#0f032b",
			contrastText: "#f9f9f9",
		},
		secondary: {
			main: "#eee7fe",
		},
	},
	transitions: {
		duration: {
			shortest: 150,
			standard: 300,
		},
	},
});

export default theme;
