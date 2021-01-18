import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./Navbar.css"

const BlogNavBar = styled.nav`
  background: transparent;
  height: 10vh;
  border-bottom: 1px solid #e8e8e8;
  font-size: 0.9rem;
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: #888;
  &:hover {
    color: #0087f8;
  }
`
const NavLinkExternal = styled.a`
  text-decoration: none;
  color: #888;
`

const NavListRight = styled.ul`
  display: flex;
  list-style: none;
  width: 50%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
`

const NavBar = () => {
  return (
    <BlogNavBar>
      <NavListRight>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLinkExternal
            className="github-link"
            target="blank"
            href="https://github.com/abdulrahman118"
          >
            GitHub
          </NavLinkExternal>
        </li>
        <li>
          <NavLinkExternal
            className="twitter-link"
            target="blank"
            href="https://twitter.com/dev_abdu"
          >
            Twitter
          </NavLinkExternal>
        </li>
        <li>
          <NavLinkExternal
            className="medium-link"
            target="blank"
            href="https://medium.com/@abdul_rahman"
          >
            Medium
          </NavLinkExternal>
        </li>
        <li>
          <NavLinkExternal
            className="mail-link"
            href="mailto:developer.abdulrahman@gmail.com"
          >
            Email
          </NavLinkExternal>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </NavListRight>
    </BlogNavBar>
  )
}

export default NavBar
