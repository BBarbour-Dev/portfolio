import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Index</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    info {
      title
      subtitle
      projects {
        name
        description
        image
        type
        date
        favorite
        github
        live
      }
    }
  }
`

export default IndexPage
