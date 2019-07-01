import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>Not all who wander are lost</h1>
      <p>404: Not found. Try a different route. 😅</p>
    </section>
  </Layout>
)

export default NotFoundPage
