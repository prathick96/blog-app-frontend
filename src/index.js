import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Spinner from "./Components/spinner/Spinner";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Spinner />
    </Router>
  </React.StrictMode>,
  rootElement
);
