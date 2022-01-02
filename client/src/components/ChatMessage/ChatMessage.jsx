import React from "react";
import "./ChatMessage.scss";

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="name-div">{message.userName}:</div>
      <div className="message-div">{message.messageText}</div>
    </div>
  );
};

export default ChatMessage;
