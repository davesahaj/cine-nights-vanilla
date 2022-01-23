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
  SendMessageContainer,
  RecieveMessageText,
  SendMessageText,
} from "./styles/Room";
import VideoScreen from "./VideoScreen";

const Room = () => {
  const messageRef = React.createRef();
  const user = useContext(socketContext);
  let params = useParams();

  const [messageList, setMessageList] = useState([
    { userName: "Modiji", messageText: "test test" },
    {
      userName: "dave",
      messageText: "test test test test test test test test test test",
    },
  ]);

  const ChatMessage = ({ message }) => {
    const type = user.user === message.userName ? "send" : "recieve";

    return type === "recieve" ? (
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
            ref={messageRef}
            placeholder="Type a message..."
          />
          <ChatButton onClick={sendMessage}>Send</ChatButton>
        </ChatInputContainer>
      </ChatContainer>
    </VideoScreenContainer>
  );
};

export default Room;
