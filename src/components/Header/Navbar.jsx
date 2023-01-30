import React from "react";

import {
  AiOutlineExperiment,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { Header, LinkStyled, Nav, Span } from "./Navbar.styles";

function Navbar() {
  return (
    <Header>
      <Nav>
        <LinkStyled to={"/"}>{"<PA /> "}</LinkStyled>
        <Span>
          <LinkStyled to={"/"}>
            <AiOutlineHome />
            Home
          </LinkStyled>

          <LinkStyled to={"sobre"}>
            <AiOutlineUser />
            Sobre
          </LinkStyled>

          <LinkStyled to={"projetos"}>
            <AiOutlineExperiment />
            Projetos
          </LinkStyled>

          <LinkStyled to={"curriculo"}>
            <AiOutlineFileText />
            Currículo
          </LinkStyled>
        </Span>
      </Nav>
    </Header>
  );
}

export default Navbar;
