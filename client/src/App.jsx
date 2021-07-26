import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <div className="App">
      <Routes className>
        <Route path="/" element={<Join />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
