import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VideoScreen from "./components/VideoScreen";
import PageNotFound from "./components/PageNotFound";
import CreateRoom from "./components/CreateRoom";
import Header from "./components/Header.jsx";
import UserModal from "./components/UserModal";
import { socketContext } from "./contexts/socketContext";

function App() {
  const user = useContext(socketContext);

  function checkUser(component) {
    return !user.user ? <UserModal /> : component;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={checkUser(<CreateRoom />)} />
        <Route exact path="/room/" element={checkUser(<VideoScreen />)} />
        <Route
          exact
          path="/room/:roomid"
          element={checkUser(<VideoScreen />)}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
