import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AllArticles from '../components/all-articles'

const ArticlesPage = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <AllArticles />
    </Layout>
  )
}

export default ArticlesPage
