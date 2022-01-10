import React from "react";
import styled from "styled-components";

const Button = ({ theme = "light", text = "txt" }) => {
  return <ButtonBody theme={theme}>{text}</ButtonBody>;
};

export default Button;

const ButtonBody = styled.button`
  @media screen and (min-width: 768px) {
    width: 40vmax;
    height: 5vmax;
    font-size: 1.8vmax;
    font-weight: bold;
  }
  @media screen and (min-width: 1024px) {
    width: 20vmax;
    height: 3vmax;
    font-size: 1.3vmax;
    font-weight: bold;
  }

  width: 30vmax;
  height: 5vmax;

  margin: 1vmax;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-size: 2vmax;

  transition: all 0.5s;
  background-color: ${({ theme }) =>
    theme === "light" ? "white" : "rgb(20,20,20)"};
  color: ${({ theme }) => (theme === "light" ? "rgb(20,20,20)" : "white")};

  &:hover {
    background-color: rgb(69, 169, 69);
    color: white;
  }
`;
