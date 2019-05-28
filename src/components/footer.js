import React from 'react'

import Contact from '../components/contact'

const Footer = () => {
  return (
    <footer>
      <p>
        Site made with love and GatsbyJs. <strong>&copy;</strong>{' '}
        {new Date().getFullYear()}
      </p>
      <Contact />
    </footer>
  )
}

export default Footer
