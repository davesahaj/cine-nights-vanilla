import "./App.scss";
import Home from "./components/Home/Home";
import VideoScreen from "./components/Video/VideoScreen";
import { socket, socketContext } from "./socket";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <socketContext.Provider value={socket}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/room/:roomid" element={<VideoScreen />} />
        </Routes>
      </socketContext.Provider>
    </div>
  );
}

export default App;
