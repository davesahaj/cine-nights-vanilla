import React, { useRef } from "react";
import { useContext } from "react";
import { socketContext } from "../contexts/socketContext";
import {
  UserModalWrapper,
  Container,
  TitleWrapper,
  Title,
  UserContainer,
  AvatarImageWrapper,
  AvatarSelector,
  UserPreviewWrapper,
  UserName,
  ConfirmButtonWrapper,
  ConfirmButton,
  UserImageWrapper,
  UserImage,
} from "./styles/UserModal.styled";

const UserModal = () => {
  const userData = useContext(socketContext);
  const userRef = useRef(null);

  return (
    <UserModalWrapper>
      <Container>
        <TitleWrapper>
          <Title>Select Your Avatar</Title>
        </TitleWrapper>
        <UserContainer>
          <AvatarImageWrapper>
            <AvatarSelector>
              {/* TODO: Provide 3-4 avatar icons */}s
            </AvatarSelector>
          </AvatarImageWrapper>
          <UserPreviewWrapper>
            <UserImageWrapper>
              <UserImage />
            </UserImageWrapper>
            <UserName type="text" placeholder="Enter your Name" ref={userRef} />
          </UserPreviewWrapper>
        </UserContainer>
        <ConfirmButtonWrapper>
          <ConfirmButton
            onClick={() => userData.updateUser(userRef.current.value)}
          >
            Continue
          </ConfirmButton>
        </ConfirmButtonWrapper>
      </Container>
    </UserModalWrapper>
  );
};

export default UserModal;

// <h3>Current User Name: {userData.user}</h3>
// <input type="text" ref={userRef} />
// <button >
//   Change User Name
// </button>
