import React, { useRef } from "react";
import { useContext } from "react";
import { socketContext } from "../contexts/socketContext";
import { UserModalContainer } from "./styles/UserModal.styled";

const UserModal = () => {
  const userData = useContext(socketContext);
  const userRef = useRef(null);

  return (
    <UserModalContainer>
      <h3>Current User Name: {userData.user}</h3>
      <h3>Current User Room: {userData.room}</h3>
      <input type="text" ref={userRef} />
      <button onClick={() => userData.updateUser(userRef.current.value)}>
        Change User Name
      </button>

      <button onClick={() => userData.updateRoom("My room")}>
        Change User Room
      </button>
    </UserModalContainer>
  );
};

export default UserModal;
