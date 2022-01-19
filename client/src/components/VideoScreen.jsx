import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socketContext } from "../contexts/socketContext";
import { VideoScreenContainer } from "./styles/VideoScreen.styled";
import VideoJS from "./VideoJS";

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="name-div">{message.userName}:</div>
      <div className="message-div">{message.messageText}</div>
    </div>
  );
};

const VideoScreen = () => {
  const baseURL = `http://localhost:4000`;
  const messageRef = React.createRef();
  let params = useParams();
  const user = useContext(socketContext);
  const playerRef = React.useRef(null);
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

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: baseURL+'/video/'+params.roomid+'/'+params.roomid+'.m3u8',
      type: 'application/x-mpegURL'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  const changePlayerOptions = () => {
    // you can update the player through the Video.js player instance
    if (!playerRef.current) {
      console.log('player NOT updated');
      return;
    }
    // [update player through instance's api]
    //playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
    console.log('player updated');
    playerRef.current.src([{src: 'http://localhost:4000/getVideo', type: 'application/x-mpegURL'}]);
  };

  return (
    <VideoScreenContainer>
      <div className="video-screen" style={{minWidth: "50vw", minHeight: "50vh"}}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
