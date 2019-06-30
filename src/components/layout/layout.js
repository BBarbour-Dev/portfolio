import React from 'react'
import styled from 'styled-components'
import './layout.css'

import MobileNav from './mobilenav'
import MobileFooter from './mobilefooter'

const Layout = ({ children }) => {
  return (
    <Container>
      <MobileNav />
      <main>{children}</main>
      <MobileFooter />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export default Layout
