/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavMenu = styled.div`
  display: flex;
`

const NavList = styled.ul`
  display: inline;
`

const NavListItem = styled.li`
  display: inline-block;
  align-content: center;
  justify-content: center;
  margin-right: 2rem;

  &:last-child {
     margin-right: 0;
  }
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 0;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const MainMenu = () => (
  <NavMenu>
    <NavList>
      <NavListItem>
        <HomeLink to="/">Home</HomeLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/about">About</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/blog">Blog</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/contact">Contact</NavLink>
      </NavListItem>
    </NavList>
  </NavMenu>
)

export default MainMenu
