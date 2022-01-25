import styled from "styled-components";

export const CreateRoomContainer = styled.div`
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputDataWrapper = styled.div`
  height: 200%;
  /* border: 1px solid red; */
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  padding-left: 5%;
  justify-content: flex-start;
`;

export const InputData = styled.div`
  display: flex;

  /* border: 1px solid blue; */
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-evenly;

  span {
    font-weight: 700;
    color: ${(props) => props.theme.textAccent};
  }
  input[type="text"] {
    color: ${(props) => props.theme.accent};
    width: 50%;
    font-size: medium;
    box-sizing: border-box;
    letter-spacing: 1px;
    border: 0;
    padding: 7px 4px;
    border-bottom: 1px solid #ccc;

    :focus {
      outline: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  height: 30%;
  /* border: 1px solid red; */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
