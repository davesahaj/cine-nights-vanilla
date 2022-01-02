import "./VideoScreen.scss";
import React, { useContext, useEffect, useState } from "react";
import { socketContext } from "../../socket";
import { useParams } from "react-router-dom";
import ChatMessage from "../ChatMessage/ChatMessage";

function Video() {
  let params = useParams();
  const messageRef = React.createRef();
  const socket = useContext(socketContext);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (!socket) return;

    // make a join request for room
    socket.emit("joinRoom", { username: `dave`, room: `${params.roomid}` });

    // add listeners
    socket.on(`messageFromServer`, (message) => {
      setMessageList((currentMessages) => [...currentMessages, message]);
    });

    // socket.on("error", (message) => {
    //TODO: add a floating error popup
    // });
  }, []);

  function sendMessage() {
    const textToSend = messageRef.current.value;
    if (textToSend) {
      socket.emit(`messageFromClient`, `${textToSend}`, function callback(res) {
        if (!res.delivered) {
          console.log("error");
        }
        // TODO: add error if message is not delivered
      });
    }
  }

  return (
    <div className="stream-container">
      <div className="video-screen">
        <video id="videoPlayer" controls muted="muted" autoPlay>
          <source src="/file.webm" type="video/mp4" />
        </video>
      </div>
      <div className="chat-box">
        <div className="chat-window">
          {messageList.map((message, index) => (
            <ChatMessage message={message} key={index} />
          ))}
        </div>
        <div className="chat-textarea">
          <input type="text" ref={messageRef} />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    </div>
  );
}

export default Video;
