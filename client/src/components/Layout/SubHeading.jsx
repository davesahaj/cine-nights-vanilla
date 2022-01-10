import React from "react";
import styled from "styled-components";

const SubHeading = ({ color = "white", text = "Sub Heading Sample Text" }) => {
  return <HeadingBody color={color}>{text}</HeadingBody>;
};

export default SubHeading;

const HeadingBody = styled.div`
  @media screen and (min-width: 768px) {
    font-size: 2vmax;
    max-width: 70vw;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.4vmax;
    max-width: 50vw;
  }

  color: ${({ color }) => color};
  text-align: center;
  font-size: 2vmax;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
`;
