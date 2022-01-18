import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles/Header.styled";
const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link> |<Link to="/create">Create Room</Link> |
      <Link to="/room/3wd">Join Room</Link> |<Link to="/asdsad">404</Link>
    </HeaderContainer>
  );
};

export default Header;
