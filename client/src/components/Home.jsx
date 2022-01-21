import {
  ButtonLeft,
  ButtonRight,
  ButtonsContainer,
  Container,
  HomeContainer,
  SubTitle,
  SubTitleWrapper,
  Title,
  TitleWrapper,
} from "./styles/Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <TitleWrapper>
          <Title>Title</Title>
        </TitleWrapper>
        <SubTitleWrapper>
          <SubTitle>
            this is a sample line with number 1.
            <br />
            this is a sample line with number 2.
          </SubTitle>
        </SubTitleWrapper>
        <ButtonsContainer>
          <ButtonLeft>Get Started</ButtonLeft>
          <ButtonRight>Learn More</ButtonRight>
        </ButtonsContainer>
      </Container>
    </HomeContainer>
  );
};

export default Home;
