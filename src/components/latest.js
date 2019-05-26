import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GiNewspaper } from 'react-icons/gi'

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
  console.log(latestArticles[0].node.frontmatter.title)
  return (
    <section id="latest" className="section">
      <h1>
        <span className="gold-icon">
          <GiNewspaper />
        </span>
        Latest
      </h1>
      <div className="article-feed">
        {latestArticles ? (
          latestArticles.map((article, index) => {
            const { node } = article
            return <FeedArticle node={node} />
          })
        ) : (
          <p>No articles to display.</p>
        )}
      </div>
      <div class="more">
        <Link to="/articles">View More</Link>
      </div>
    </section>
  )
}

export default LatestArticles
