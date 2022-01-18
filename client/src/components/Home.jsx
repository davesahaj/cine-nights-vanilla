import { HomeContainer } from "./styles/Home.styled";
import { useContext } from "react";
import { socketContext } from "../contexts/socketContext";

const Home = () => {
  const socket = useContext(socketContext);
  return (
    <HomeContainer>
      <h2>welcome, {socket.user ? socket.user : "Guest"}</h2>
      <button>Create a Room</button>
    </HomeContainer>
  );
};

export default Home;
