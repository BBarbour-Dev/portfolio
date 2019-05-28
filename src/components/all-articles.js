import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import FeedArticle from './feed-article'

const AllArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "article" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
            timeToRead
          }
        }
      }
    }
  `)
  const allArticles = data.allMarkdownRemark.edges
  return (
    <section id="latest" className="section">
      <h1>All Articles</h1>
      <div className="article-feed">
        {allArticles ? (
          allArticles.map((article, index) => {
            const { node } = article
            return <FeedArticle node={node} key={index} />
          })
        ) : (
          <p>No articles to display.</p>
        )}
      </div>
    </section>
  )
}

export default AllArticles
