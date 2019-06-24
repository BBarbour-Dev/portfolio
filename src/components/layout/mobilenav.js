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
      <div className="menu-toggle">
        <button
          className="menu-togghamburger"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`menu-links ${showLinks}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>{' '}
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
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  color: var(--light);
  position: relative;

  @media (min-width: 700px) {
    display: none;
  }

  .menu-toggle {
    background-color: var(--primary);
    height: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    button {
      color: inherit;
      background-color: inherit;
      border: none;
      font-size: 2rem;
      margin: 1rem;
    }

    button:hover {
      color: var(--secondary);
    }

    button:focus {
      outline: none;
    }
  }

  .menu-links {
    position: absolute;
    width: 100%;
    background-color: var(--primary);
    text-align: center;
    font-size: 1.8rem;
    font-family: var(--secondary-font);
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    opacity: 0;
    height: 0;
    transition: height 0.75s ease;
    z-index: 1;
    box-shadow: 0 0.2rem 0.2rem var(--primary-shadow);

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
    }dd
  }

  .opened {
    height: 12.8rem;
    opacity: 1;
  }
`

export default MobileNav
