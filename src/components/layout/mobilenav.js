import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false)
  const showLinks = navOpen ? 'opened' : ''
  return (
    <NavStyle>
      <div className={`menu-links ${showLinks}`}>
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
              href="https://drive.google.com/file/d/1fCFhhvYgOxxM7FjSpBX1F48tVDht8bF4/view"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-toggle">
        <button
          className="menu-togghamburger"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  color: var(--light);
  background: var(--primary);
  padding: 0 2rem;

  .menu-toggle {
    background-color: var(--primary);
    min-height: 8vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    button {
      color: inherit;
      background-color: inherit;
      border: none;
      font-size: 2.5rem;
    }

    button:hover {
      color: var(--secondary);
    }
  }

  .menu-links {
    width: 100%;
    background-color: var(--primary);
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in;

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

  .opened {
    height: 12.8rem;
    opacity: 1;
    visibility: visible;
    padding: 2rem 0;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`

export default MobileNav
