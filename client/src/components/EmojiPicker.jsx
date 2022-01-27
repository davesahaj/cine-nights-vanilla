import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import styled from "styled-components";

const PickerWrapper = styled.div`
    z-index: 1000;
    position: absolute;
    bottom: 10%;
`;

const PickerStyle = {

};

const EmojiPicker = ({ currentMessage, setCurrentMessage, setShowEmojiPicker}) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setCurrentMessage(currentMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <PickerWrapper>
      <Picker disableSearchBar={true} onEmojiClick={onEmojiClick} pickerStyle={PickerStyle} />
    </PickerWrapper>
  );
};

export default EmojiPicker;