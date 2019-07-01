import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import AllArticles from '../components/articles/all-articles'

const ArticlesPage = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <div className="content-wrapper">
        <AllArticles />
      </div>
    </Layout>
  )
}

export default ArticlesPage
