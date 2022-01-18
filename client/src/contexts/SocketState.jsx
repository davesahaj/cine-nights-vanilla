import { useState } from "react";
import { socketContext as SocketContext } from "./socketContext";
import { socket } from "./socketConfig";

const SocketState = (props) => {
  const [data, setData] = useState({ user: null, room: null });

  const updateUser = (name) => {
    setData((prevData) => ({ ...prevData, user: name }));
  };
  const updateRoom = (room) => {
    setData((prevData) => ({ ...prevData, room: room }));
    console.log("function called");
  };

  return (
    <SocketContext.Provider
      value={{
        user: data.user,
        room: data.room,
        socketid: socket.id,
        updateUser,
        updateRoom,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketState;
