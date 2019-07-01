import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import MobileHeader from '../components/landing/mobileheader'
import Showcase from '../components/landing/showcase'
import LatestArticles from '../components/landing/latest-articles'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MobileHeader />
      <div className="content-wrapper">
        <Showcase />
        <LatestArticles />
      </div>
    </Layout>
  )
}

export default IndexPage
