import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 0 15%;
  align-items: center;
  font-size: x-large;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  display: flex;
  gap: 10%;
`;
