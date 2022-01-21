import {
  F0FContainer,
  TitleWrapper,
  Container,
  Title,
  ButtonsContainer,
  ButtonLeft,
  ButtonRight,
} from "./styles/PageNotFound.styled";
const PageNotFound = () => {
  return (
    <F0FContainer>
      <Container>
        <TitleWrapper>
          <Title>Page not Found</Title>
        </TitleWrapper>
        <ButtonsContainer>
          <ButtonLeft>Home Page</ButtonLeft>
          <ButtonRight>Create Room</ButtonRight>
        </ButtonsContainer>
      </Container>
    </F0FContainer>
  );
};

export default PageNotFound;
