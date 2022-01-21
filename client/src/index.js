import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";

import SocketProvider from "./contexts/SocketProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <Router>
        <App />
      </Router>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
