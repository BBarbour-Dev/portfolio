import React from 'react'
import styled from 'styled-components'
import './layout.css'

import MobileNav from './mobilenav'
import Footer from './footer'
import Sidebar from '../layout/sidebar/sidebar'

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <MobileNav />
      <main>
        {children}
        <Footer />
      </main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    flex-direction: column;
    display: flex;
    min-height: 100vh;
  }

  @media (min-width: 1000px) {
    flex-direction: row;

    main {
      flex-basis: 75%;
    }
  }
`

export default Layout
