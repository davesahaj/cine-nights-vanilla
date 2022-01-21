import { useState } from "react";
import { socketContext as SocketContext } from "./socketContext";
import { socket, baseURL } from "./socketConfig";

const SocketProvider = (props) => {
  const [data, setData] = useState({
    user: window.localStorage.getItem("CINEUSER"),
    room: null,
  });

  const updateUser = (name) => {
    window.localStorage.setItem("CINEUSER", name);
    setData((prevData) => ({ ...prevData, user: name }));
  };
  const updateRoom = (room) => {
    setData((prevData) => ({ ...prevData, room: room }));
  };

  return (
    <SocketContext.Provider
      value={{
        user: data.user,
        room: data.room,
        socket,
        updateUser,
        updateRoom,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
