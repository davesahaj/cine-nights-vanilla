import React from "react";
import styled from "styled-components";

const MainHeading = ({
  color = "white",
  text = "Main Heading Sample Text",
}) => {
  return <HeadingBody color={color}>{text}</HeadingBody>;
};

export default MainHeading;

const HeadingBody = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 5vmax;
    max-width: 70vw;
  }
  @media screen and (min-width: 1024px) {
    font-size: 4vmax;
    max-width: 50vw;
  }

  color: ${({ color }) => color};
  text-align: center;
  font-size: 5vmax;
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;
