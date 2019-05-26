import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import FeedArticle from './feed-article'

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "article" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
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
  const latestArticles = data.allMarkdownRemark.edges
  return (
    <section id="latest" className="section">
      <h1>Latest</h1>
      <div className="article-feed">
        {latestArticles ? (
          latestArticles.map((article, index) => {
            const { node } = article
            return <FeedArticle node={node} key={index} />
          })
        ) : (
          <p>No articles to display.</p>
        )}
      </div>
      <div className="more">
        <Link to="/articles">...More Articles</Link>
      </div>
    </section>
  )
}

export default LatestArticles
