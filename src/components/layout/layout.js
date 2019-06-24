import React from 'react'
import './layout.css'

import MobileNav from './mobilenav'

const Layout = ({ children }) => {
  return (
    <div>
      <MobileNav />
      {children}
    </div>
  )
}

export default Layout
