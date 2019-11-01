import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { Home, News, Photos, Travel } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseLine />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
