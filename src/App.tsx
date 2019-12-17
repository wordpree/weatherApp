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
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/photos" component={Photos} />
          <Route path="/travel" component={Travel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
