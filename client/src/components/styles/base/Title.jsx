import styled from "styled-components";

const TitleWrapper = styled.div`
  height: 100%;
  /* border: 1px solid blue; */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.h1`
  color: white;
  font-size: 48px;
  padding: 2%;
  width: 100%;
  text-align: center;
`;

const Title = ({ text, css = {} }) => {
  return (
    <TitleWrapper>
      <TitleText style={css}>{text}</TitleText>
    </TitleWrapper>
  );
};

export default Title;
