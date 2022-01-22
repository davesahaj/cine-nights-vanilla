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
          <Title>Cine-nights</Title>
        </TitleWrapper>
        <SubTitleWrapper>
          <SubTitle>
            Cine nights where you can Enjoy content with your binge-watch buddies, no matter how far away they are from you.
            <br />
            <br />
            1 - Create rooms and upload videos. ---- Screenshot 1
            <br />
            2 - Invite your binge-watch buddies. ---- Screenshot 2
            <br />
            3 - Synchronized video streaming While chatting. ---- Screenshot 3
            <br />
            4 - Enjoy adaptive streaming. ---- Screenshot 4
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