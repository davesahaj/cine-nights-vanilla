import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";

import SocketState from "./contexts/SocketState";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <SocketState>
      <Router>
        <App />
      </Router>
    </SocketState>
  </React.StrictMode>,
  document.getElementById("root")
);
