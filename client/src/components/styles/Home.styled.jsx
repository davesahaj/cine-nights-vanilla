import styled from "styled-components";

export const HomeContainer = styled.div`
  display: Flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.secondary};
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  width: 60%;
  height: 50%;
  border: 1px solid white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  height: 30%;
  border: 1px solid blue;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
`;

export const SubTitleWrapper = styled.div`
  height: 70%;
  border: 1px solid red;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubTitle = styled.h3`
  color: white;
`;

export const ButtonsContainer = styled.div`
  height: 20%;
  border: 1px solid red;
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonLeft = styled.button``;
export const ButtonRight = styled(ButtonLeft)``;
