import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Nav from './nav'

const Sidebar = () => {
  return (
    <SidebarStyle>
      <Header />
      <Nav />
    </SidebarStyle>
  )
}

const SidebarStyle = styled.nav`
  background-color: var(--primary);
  flex-basis: 25%;

  @media (max-width: 1000px) {
    display: none;
  }
`

export default Sidebar
