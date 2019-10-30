import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Home from "./pages/Home";
import News from "./pages/News";
import Photos from "./pages/Photos";
import Travel from "./pages/Travel";
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
          <Route path="travel">
            <Travel />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
