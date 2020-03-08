import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { Home, News, Photos, Travel } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Error from "./components/Error";
import { SygicDetail } from "./components/sygicCollections";
function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Oswald",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif"
      ].join(",")
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/attraction/:id" component={SygicDetail} />
          <Route path="/news" component={News} />
          <Route path="/photos" component={Photos} />
          <Route path="/travel" component={Travel} />
          <Route component={Error} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
