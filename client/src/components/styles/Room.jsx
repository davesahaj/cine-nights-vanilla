import styled from "styled-components";

export const VideoScreenContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 100vh;
  width: 100vw;
  display: flex;
`;
export const VideoWrapper = styled.div`
  height: 100%;
  width: 75%;
  border-right: 1px solid gray;
`;
export const Video = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChatContainer = styled.div`
  height: 100%;
  width: 25%;
`;
export const ChatWindow = styled.div`
  height: 90%;
  padding: 1vmax;
`;

export const InfoMessageContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;

  margin-top: 1vmax;
`;
export const InfoMessageText = styled.span`
  color: ${(props) => props.theme.textAccent};
  width: 100%;
  border-radius: 5px;
  text-align: center;
`;

export const RecieveMessageContainer = styled.div`
  min-height: 3vmax;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;

  margin-top: 1vmax;
`;
export const SendMessageContainer = styled(RecieveMessageContainer)`
  align-items: flex-end;
`;
export const MessageSender = styled.h4`
  color: #50616b;
  width: 100%;
  font-size: smaller;
  background-color: inherit;
  padding-bottom: 0.2vmax;
`;
export const SendMessageText = styled.p`
  background-color: #252e39;
  color: white;
  width: auto;
  max-width: 80%;
  padding: 1vmax;
  border-radius: 15px;
`;

export const RecieveMessageText = styled(SendMessageText)`
  background-color: #425265;
`;
export const ChatInputContainer = styled.div`
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChatInputText = styled.input`
  height: 40%;
  width: 85%;
  color: white;
  font-weight: 700;
  font-size: 1.1vmax;
  background-color: inherit;
  border: none;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
  }
`;
export const ChatEmoji = styled.div`
  width: 15%;
  height: 40%;
  color: white; //TODO: add emoji and remote color
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChatButton = styled.button`
  color: #788086;
  font-weight: 700;
  font-size: 1.2vmax;
  background-color: inherit;
  border: none;
  width: 20%;
  height: 40%;
  cursor: pointer;
  &:hover {
    color: #78a3ca;
  }
`;
