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
  width: 800px;
  height: 430px;
  /* border: 1px solid white; */
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${({ theme }) => theme.primary}; */
`;

export const ButtonsContainer = styled.div`
  height: 100%;
  /* border: 1px solid red; */
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
