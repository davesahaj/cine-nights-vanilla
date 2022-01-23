import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
import PageNotFound from "./components/PageNotFound";
import CreateRoom from "./components/CreateRoom";
import Header from "./components/Header.jsx";
import { dark } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={dark}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/room/new" element={<CreateRoom />} />
          <Route exact path="/room/:roomid" element={<Room />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App; 