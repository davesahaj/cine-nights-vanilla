import { CreateRoomContainer } from "./styles/CreateRoom.styled";
import { useContext, useRef } from "react";
import { socketContext } from "../contexts/socketContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRoom = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:4000`;
  const roomRef = useRef(null);
  const fileRef = useRef(null);
  const user = useContext(socketContext);

  const createRoom = () => {
    axios
      .post(baseURL + "/create", {
        username: user.user,
        userid: user.socket.id,
      })
      .then((res) => {
        user.updateRoom(res.data.room);
        // TODO: make an async code to user user.room instead of
        // res.data.room in navigate statement
        // right now user.room is null
        navigate(`/room/${res.data.room}`, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        //TODO: SHOW ERROR IN ERROR COMPONENT
      });
  };
  return (
    <CreateRoomContainer>
      <h1>Welcome {user.user}</h1>

      <h2>Enter Room Name:</h2>
      <input type="text" ref={roomRef} />
      <h2>Select Video File to Upload:</h2>
      <input type="text" ref={fileRef} />

      <button onClick={createRoom}>Create Room</button>
    </CreateRoomContainer>
  );
};

export default CreateRoom;
