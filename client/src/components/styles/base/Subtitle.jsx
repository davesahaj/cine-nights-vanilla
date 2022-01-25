import styled from "styled-components";

export const SubTitleWrapper = styled.div`
  height: 100%;
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubTitleText = styled.h3`
  color: white;
  padding: 2%;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  line-height: 140%;
  color: ${({ theme }) => theme.textAccent};
`;
const Subtitle = ({ text }) => {
  return (
    <SubTitleWrapper>
      <SubTitleText>{text}</SubTitleText>
    </SubTitleWrapper>
  );
};

export default Subtitle;
