import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socketContext } from "../contexts/socketContext";
import { VideoScreenContainer } from "./styles/VideoScreen.styled";

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="name-div">{message.userName}:</div>
      <div className="message-div">{message.messageText}</div>
    </div>
  );
};

const VideoScreen = () => {
  const messageRef = React.createRef();
  let params = useParams();
  const user = useContext(socketContext);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (!user.socket) return;
    user.socket.emit("joinRoom", { username: user.user, room: params.roomid });
    user.socket.on(`messageFromServer`, (message) => {
      setMessageList((currentMessages) => [...currentMessages, message]);
    });

    // socket.on("error", (message) => {
    //TODO: add a floating error popup
    // });
  }, []);

  function sendMessage() {
    const textToSend = messageRef.current.value;
    if (textToSend) {
      user.socket.emit(
        `messageFromClient`,
        `${textToSend}`,
        function callback(res) {
          if (!res.delivered) {
            console.log("error");
          }
          // TODO: add error if message is not delivered
        }
      );
    }
  }

  return (
    <VideoScreenContainer>
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
    </VideoScreenContainer>
  );
};

export default VideoScreen;
