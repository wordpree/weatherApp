import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "./layout/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["sans-serify", "Roboto", '"Helvetica Neue"', "Arial"].join(
        ","
      ),
    },
    palette: {
      primary: { main: "#04BFBF" },
      secondary: { main: "#fff" },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
