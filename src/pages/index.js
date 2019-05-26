import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SubNav from '../components/sub-nav'
import Welcome from '../components/welcome'
import LatestArticles from '../components/latest'
import Tech from '../components/tech'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <SubNav />
      <Welcome data={data.info} />
      <LatestArticles />
      <Tech data={data.info.tech} />
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
      tech {
        js
        html
        css
        react
        firebase
        node
        git
        apple
        linux
        windows
      }
    }
  }
`

export default IndexPage
