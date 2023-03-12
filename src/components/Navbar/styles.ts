import { NavProps } from "./types";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav<NavProps>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100px;
  padding: 0 5%;

  transform: ${(props) => !props.isNavVisible && "translateY(-100%)"};
  transition: transform 0.5s ease-in-out;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link)`
  position: relative;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration: none;
  color: white;

  &:after {
    content: "";
    position: absolute;
    background-color: white;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5%;
`;
