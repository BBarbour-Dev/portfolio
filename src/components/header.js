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
              <GiHouse style={{ position: 'relative', top: '3px' }} />
            </span>
            Home
          </Link>
          <Link to="/articles" className="nav-link">
            <span className="secondary-header">
              <GiBookshelf style={{ position: 'relative', top: '3px' }} />
            </span>
            Articles
          </Link>
          <Link to="/projects" className="nav-link">
            <span className="secondary-header">
              <GiCog style={{ position: 'relative', top: '3px' }} />
            </span>
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1fCFhhvYgOxxM7FjSpBX1F48tVDht8bF4/view"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="secondary-header">
              <GiScrollUnfurled style={{ position: 'relative', top: '3px' }} />
            </span>
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Header
