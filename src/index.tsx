import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig from "./redux-saga/store";
ReactDOM.render(
  <Router>
    <Provider store={storeConfig()}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
