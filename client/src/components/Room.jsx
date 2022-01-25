import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socketContext } from "../contexts/socketContext";
import UserModal from "./UserModal";
import {
  ChatContainer,
  VideoScreenContainer,
  VideoWrapper,
  ChatWindow,
  ChatInputText,
  ChatButton,
  ChatEmoji,
  ChatInputContainer,
  MessageSender,
  RecieveMessageContainer,
  MessageText,
  InfoMessageContainer,
  InfoMessageText,
  SendMessageContainer,
  RecieveMessageText,
  SendMessageText,
} from "./styles/Room";
import VideoScreen from "./VideoScreen";

const Room = () => {
  const user = useContext(socketContext);
  let params = useParams();

  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const ChatMessage = ({ message }) => {
    const type = user.user === message.userName ? "send" : "recieve";

    return message.isInfo ? (
      <InfoMessageContainer>
        <InfoMessageText>{message.messageText}</InfoMessageText>
      </InfoMessageContainer>
    ) : type === "recieve" ? (
      <RecieveMessageContainer>
        <MessageSender>{message.userName}</MessageSender>
        <RecieveMessageText>{message.messageText}</RecieveMessageText>
      </RecieveMessageContainer>
    ) : (
      <SendMessageContainer>
        <SendMessageText>{message.messageText}</SendMessageText>
      </SendMessageContainer>
    );
  };

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
    const textToSend = currentMessage;
    if (textToSend) {
      user.socket.emit(
        `messageFromClient`,
        `${textToSend}`,
        function callback(res) {
          if (!res.delivered) {
            console.log("error");
          } else {
            setCurrentMessage("");
          }
          // TODO: add error if message is not delivered
        }
      );
    }
  }

  return !user.user ? (
    <UserModal />
  ) : (
    <VideoScreenContainer>
      <VideoWrapper>
        <VideoScreen />
      </VideoWrapper>
      <ChatContainer>
        <ChatWindow>
          {messageList.map((message, index) => (
            <ChatMessage message={message} key={index} />
          ))}
        </ChatWindow>
        <ChatInputContainer>
          <ChatEmoji>:-)</ChatEmoji>
          <ChatInputText
            type="text"
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type a message..."
            value={currentMessage}
          />
          <ChatButton onClick={sendMessage}>Send</ChatButton>
        </ChatInputContainer>
      </ChatContainer>
    </VideoScreenContainer>
  );
};

export default Room;
