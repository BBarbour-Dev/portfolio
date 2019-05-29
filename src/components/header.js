import { Link } from 'gatsby'
import React, { useState } from 'react'

import { GiHouse, GiBookshelf, GiCog, GiScrollUnfurled } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)
  const mobile = toggle ? '' : 'mobile-hide'
  const navHide = toggle ? 'nav nav-view' : 'nav nav-hide'
  return (
    <header className="header">
      <div className="desktop-hide">
        <button className="bars" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FaTimes className="secondary" />
          ) : (
            <FaBars className="primary" />
          )}
        </button>
      </div>
      <nav className={navHide}>
        <div className="mobile-hide">
          <Link to="/" className="nav-link" style={{ flexBasis: '80%' }}>
            {siteTitle}
          </Link>
        </div>
        <div className={mobile}>
          <Link to="/" className="nav-link desktop-hide">
            <span className="secondary-header">
              <GiHouse />
            </span>
            Home
          </Link>
          <Link to="/articles" className="nav-link">
            <span className="secondary-header">
              <GiBookshelf />
            </span>
            Articles
          </Link>
          <Link to="/projects" className="nav-link">
            <span className="secondary-header">
              <GiCog />
            </span>
            Projects
          </Link>
          <Link to="/resume" className="nav-link">
            <span className="secondary-header">
              <GiScrollUnfurled />
            </span>
            Resume
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
