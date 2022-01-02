import { createRef, useRef, useState, useContext } from "react";
import axios from "axios";
import { socketContext } from "../../socket";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  let navigate = useNavigate();
  const baseURL = `http://localhost:4000`;
  const socket = useContext(socketContext);

  const userRef = createRef();
  const messageRef = createRef();

  function handleCreate() {
    const user = userRef.current.value;
    if (!user) {
      messageRef.current.innerText = `Please enter the username`;
    } else {
      axios
        .post(baseURL + "/create", { username: user, userid: `${socket.id}` })
        .then((res) => {
          navigate(`/room/${res.data.room}`, { replace: true });
        })
        .catch((err) => {
          console.log(`an error occured: ${err}`);
        });
    }
  }

  function sendPing() {
    socket.emit(`message`, { txt: `p-i-n-g` }, (res) => {
      console.log(res.status);
    });
  }

  /* socket functions
   send message
   recieve message
   connect
   disconnect
   
  */
  return (
    <div className="wrapper">
      <div className="container">
        <h2>Welcome page</h2>
        <h4 ref={messageRef}></h4>

        <div className="joinRoom">
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            ref={userRef}
          />
          <button onClick={handleCreate}>Create Room</button>
        </div>

        <button onClick={sendPing}>Send Ping</button>
      </div>
    </div>
  );
};

export default Home;
