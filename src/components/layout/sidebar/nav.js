import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavStyle>
      <div className={`menu-links`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Du9G004bYDGjPfEDXJ8U2tT1_VTQ9t-n/view"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  color: var(--light);
  background: var(--primary);
  padding: 0 2rem;

  .menu-links {
    width: 100%;
    background-color: var(--primary);
    font-family: var(--primary);
    text-align: center;
    font-size: 2rem;
    font-weight: 400;

    ul {
      li {
        list-style: none;
      }

      li:not(:last-child) {
        padding-bottom: 1rem;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        color: var(--secondary);
      }
    }
  }
`

export default Nav
