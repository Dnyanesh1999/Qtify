import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B", // Your primary green color
    },
    secondary: {
      main: "#121212", // Your secondary black color
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
