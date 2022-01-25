import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import Subtitle from "./styles/base/Subtitle";
import Title from "./styles/base/Title";
import Button from "./styles/base/Button";
import {
  F0FContainer,
  Container,
  ButtonsContainer,
} from "./styles/PageNotFound.styled";
const PageNotFound = () => {
  let navigate = useNavigate();
  return (
    <Fade>
      <F0FContainer>
        <Container>
          <Title text="Page Not Found" />
          <Subtitle text="Sorry but the page you're looking for cannot be found" />
          <Subtitle text="if you're in denial and think this is a conspiracy that cannot possibly be true, please try using the button below to see the website code on GitHub." />
          <ButtonsContainer>
            <Button onClick={() => navigate("/")}>Home Page</Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.github.com/davesahaj/cine-nights/",
                  "_blank"
                );
              }}
            >
              Github Page
            </Button>
          </ButtonsContainer>
        </Container>
      </F0FContainer>
    </Fade>
  );
};

export default PageNotFound;
