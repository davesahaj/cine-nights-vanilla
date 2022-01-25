import styled from "styled-components";
export const UserModalWrapper = styled.div`
  display: Flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.secondary};
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
  height: 60%;
  max-width: 70%;
  max-height: 60%;
`;
export const TitleWrapper = styled.div`
  display: block;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20%;
  /* border: 2px solid white; */
`;
export const Title = styled.h1`
  color: white;
`;

export const UserContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: space-between;
  /* border: 2px solid yellow; */
`;
export const AvatarImageWrapper = styled.div`
  /* border: 2px solid green; */
  width: 65%;
`;
export const AvatarSelector = styled.div``;
export const UserPreviewWrapper = styled.div`
  /* border: 2px solid purple; */
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const UserImageWrapper = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  height: 90%;
`;
export const UserImage = styled.img``;

export const UserName = styled.input`
  height: 10%;
  width: 70%;
`;
export const ConfirmButtonWrapper = styled.div`
  /* border: 2px solid cyan; */
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
