import { CreateRoomContainer } from "./styles/CreateRoom.styled";
import { useContext, useRef } from "react";
import { socketContext } from "../contexts/socketContext";

const CreateRoom = () => {
  const roomRef = useRef(null);
  const fileRef = useRef(null);
  const user = useContext(socketContext);

  const createRoom = () => {
    //TODO: Upload file to backend
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
