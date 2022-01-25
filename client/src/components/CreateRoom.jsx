import React, { useContext, useEffect, useState, useRef } from "react";
import {
  CreateRoomContainer,
  ButtonContainer,
  Container,
  InputDataWrapper,
  InputData,
} from "./styles/CreateRoom.styled";
import Title from "./styles/base/Title";

import Button from "./styles/base/Button";

import { Fade } from "react-reveal";
import { socketContext } from "../contexts/socketContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserModal from "./UserModal";

const CreateRoom = () => {
  const navigate = useNavigate();
  const baseURL = `http://localhost:4000`;
  const roomRef = useRef(null);
  const fileRef = useRef(null);
  const user = useContext(socketContext);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const createRoom = () => {
    const formData = new FormData();

    formData.append("username", user.user);
    formData.append("roomname", roomRef.current.value);
    formData.append("userid", user.socket.id);
    formData.append("selectedFile", selectedFile);

    const headers = { "Content-Type": "multipart/form-data" };

    axios
      .post(baseURL + "/create", formData, { headers })
      .then((res) => {
        user.updateRoom(res.data.room);
        navigate(`/room/${res.data.room}`, { replace: true });
        // TODO: make an async code to user user.room instead of
        // res.data.room in navigate statement
        // right now user.room is null
      })
      .catch((err) => {
        console.log(err);
        //TODO: SHOW ERROR IN ERROR COMPONENT
      });
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return !user.user ? (
    <UserModal />
  ) : (
    <Fade>
      <CreateRoomContainer>
        <Container>
          <Title text="Create Room" css={{ textAlign: "left" }} />
          <InputDataWrapper>
            <InputData>
              <span>Room Name</span>
              <input type="text" ref={roomRef} />
            </InputData>
            <InputData>
              <span>Select file to upload</span>
              <input
                name="sampleFile"
                type="file"
                onChange={handleFileSelect}
                ref={fileRef}
              />
            </InputData>
          </InputDataWrapper>
          <ButtonContainer>
            <Button to={createRoom} text="Upload" />
          </ButtonContainer>
        </Container>
      </CreateRoomContainer>
    </Fade>
  );
};

export default CreateRoom;
