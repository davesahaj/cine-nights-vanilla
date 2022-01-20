import React, { useContext, useEffect, useState, useRef } from "react";
import { CreateRoomContainer } from "./styles/CreateRoom.styled";
import { socketContext } from "../contexts/socketContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRoom = () => {

  const navigate = useNavigate();
  const baseURL = `http://localhost:4000`;
  const roomRef = useRef(null);
  const fileRef = useRef(null);
  const user = useContext(socketContext);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const createRoom = () => {
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("username", user.user);
    formData.append("userid", user.socket.id);
    const headers = { "Content-Type": "multipart/form-data" };
    
    axios
      .post(baseURL + "/create", formData, { headers })
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

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <CreateRoomContainer>
      <h1>Welcome {user.user}</h1>

      <h2>Enter Room Name:</h2>
      <input type="text" ref={roomRef} />
      <h2>Select Video File to Upload:</h2>
      <input name="sampleFile" type="file" onChange={handleFileSelect} ref={fileRef} />
      <button onClick={createRoom}>Create Room</button>
    </CreateRoomContainer>
  );
};

export default CreateRoom;
