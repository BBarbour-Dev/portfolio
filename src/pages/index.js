import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
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
