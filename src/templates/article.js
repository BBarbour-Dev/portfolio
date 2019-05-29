import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Article = ({ data, location }) => {
  console.log(location)
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="back">
        <Link to="/articles">← Back to Articles</Link>
      </div>
      <div className="article-wrapper">
        <h1 className="article-h1">{frontmatter.title}</h1>
        <p className="article-date">
          {frontmatter.date} <span className="big-dot">{' • '}</span>
          {timeToRead} min read
        </p>
        <aritcle
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
      timeToRead
    }
  }
`

export default Article
