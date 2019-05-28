import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Welcome from '../components/welcome'
import LatestArticles from '../components/latest'
import Showcase from '../components/showcase'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome title={data.info.title} subtitle={data.info.subtitle} />
      <LatestArticles />
      <Showcase projects={data.info.projects} />
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
