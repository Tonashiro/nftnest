import { NavProps } from "./types";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

export const NavContent = styled.div<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  min-height: 100px;
  padding: 0 1%;
  margin: 0 auto;

  z-index: 9999;

  background-color: ${(props) => (props.navBackground ? "rgba(0,0,0,0.9);" : "transparent")};
  transform: ${(props) => !props.isNavVisible && "translateY(-100%)"};
  transition: all 0.5s ease-in-out;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration: none;
  color: white;
  white-space: nowrap;

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
