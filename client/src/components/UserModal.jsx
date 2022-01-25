import React, { useRef } from "react";
import { useContext } from "react";
import { socketContext } from "../contexts/socketContext";
import Button from "./styles/base/Button";
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
  UserImageWrapper,
  UserImage,
} from "./styles/UserModal.styled";

import { Fade } from "react-reveal";

const UserModal = () => {
  const userData = useContext(socketContext);
  const userRef = useRef(null);

  return (
    <Fade>
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
              <UserName
                type="text"
                placeholder="Enter your Name"
                ref={userRef}
              />
            </UserPreviewWrapper>
          </UserContainer>
          <ConfirmButtonWrapper>
            <Button
              to={() => userData.updateUser(userRef.current.value)}
              text="Continue"
            />
          </ConfirmButtonWrapper>
        </Container>
      </UserModalWrapper>
    </Fade>
  );
};

export default UserModal;

// <h3>Current User Name: {userData.user}</h3>
// <input type="text" ref={userRef} />
// <button >
//   Change User Name
// </button>
