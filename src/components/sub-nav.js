import React, { useState } from 'react'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const SubNav = () => {
  const [toggle, setToggle] = useState(false)
  const navHide = toggle ? 'nav-view' : 'nav-hide'
  return (
    <div className="sub-nav-wrapper">
      <div className="desktop-hide">
        <button className="chevron" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FaChevronUp className="secondary" />
          ) : (
            <FaChevronDown className="primary" />
          )}
        </button>
      </div>
      <div className={`sub-nav ${navHide}`}>
        <a href="#latest">Latest</a>
        <a href="#latest">Tech</a>
        <a href="#latest">Showcase</a>
        <a href="#latest">Resume</a>
        <a href="#latest">Contact</a>
      </div>
    </div>
  )
}

export default SubNav
