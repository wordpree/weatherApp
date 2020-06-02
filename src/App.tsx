import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "./layout/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serify", '"Helvetica Neue"', "Arial"].join(
        ","
      ),
    },
    palette: {
      primary: { main: "#028a8a" },
      secondary: { main: "rgb(234,175,4)" },
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
