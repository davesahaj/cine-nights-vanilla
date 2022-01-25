import {
  ButtonsContainer,
  Container,
  HomeContainer,
} from "./styles/Home.styled";
import Button from "./styles/base/Button";

import { useNavigate } from "react-router-dom";

import { Fade } from "react-reveal";
import Title from "./styles/base/Title";
import Subtitle from "./styles/base/Subtitle";

const Home = () => {
  let navigate = useNavigate();
  return (
    <Fade>
      <HomeContainer>
        <Container>
          <Title text=" A new way to create watch parties" />
          <Subtitle
            text="
              An exciting place where you can create, host and join your own
              watchparty servers and stream the movies of your choice!"
          />
          <ButtonsContainer>
            <Button to={() => navigate("/room/new")} text="Get Started" />
            <Button text="Learn More" />
          </ButtonsContainer>
        </Container>
      </HomeContainer>
    </Fade>
  );
};

export default Home;
