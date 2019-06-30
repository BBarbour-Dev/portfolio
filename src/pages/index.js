import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import MobileHeader from '../components/landing/mobileheader'
import Showcase from '../components/landing/showcase'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MobileHeader />
      <div className="content-wrapper">
        <Showcase />
      </div>
    </Layout>
  )
}

export default IndexPage
