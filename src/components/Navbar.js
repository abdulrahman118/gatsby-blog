import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

import './Navbar.css'

const BlogNavBar = styled.nav`
background: transparent;
height: 10vh;
border-bottom: 1px solid #E8E8E8;
font-size: 0.9rem;
`
const NavLink = styled(Link)`
  text-decoration:none;
color:#888;
&:hover {
    color: #0087F8;    
  }
`
const NavLinkExternal = styled.a`
  text-decoration:none;
  color:#888;
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
                <li><NavLink to="/">Home</NavLink></li>                
                <li><NavLinkExternal className="github-link" target="blank" href="https://github.com/abdulrahman118">GitHub</NavLinkExternal></li>
                <li><NavLinkExternal className="twitter-link" target="blank" href="https://twitter.com/dev_abdu">Twitter</NavLinkExternal></li>
                <li><NavLinkExternal className="mail-link" href="mailto:abdul@abdul-rahman.info">Email</NavLinkExternal></li>
            </NavListRight>
        </BlogNavBar>

    )
}

export default NavBar;