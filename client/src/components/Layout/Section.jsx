import styled from "styled-components";

const Section = styled.div`
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    align-items: center;
    justify-content: space-evenly;
  }
  height: 100vh;
  background-color: ${({ color }) => (color ? color : "rgb(49,49,49)")};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all 0.5s;
`;

export default Section;
