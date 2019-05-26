import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SubNav from '../components/sub-nav'
import Welcome from '../components/welcome'
import LatestArticles from '../components/latest'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <SubNav />
      <Welcome data={data.info} />
      <LatestArticles />
    </Layout>
  )
}

export const query = graphql`
  {
    info {
      firstName
      lastName
      title
      subtitle
      contact {
        email
      }
    }
  }
`

export default IndexPage
