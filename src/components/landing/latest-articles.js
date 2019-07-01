import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Article from '../articles/article'

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allDevArticles(
        filter: { article: { tags: { ne: "help" } } }
        sort: { fields: [article___published_timestamp], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            article {
              id
              title
              published_at(formatString: "MMMM, DD, YYYY")
              tag_list
              url
              comments_count
              positive_reactions_count
            }
          }
        }
      }
    }
  `)
  const articles = data.allDevArticles.edges
  return (
    <LatestStyle>
      <h1>Latest Articles</h1>
      <div className="article-list">
        {articles.map(article => {
          return <Article article={article} key={article.node.article.id} />
        })}
      </div>
      <div className="more">
        <Link to="/articles">More Articles →</Link>
      </div>
    </LatestStyle>
  )
}

const LatestStyle = styled.section`
  margin: 2rem 0;

  h1 {
    margin: 2rem 0 4rem 0;
  }

  .article-list {
    article:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .more {
    width: 100%;
    font-family: var(--secondary-font);
    color: var(--primary);
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 4rem;
    text-align: right;
  }
`

export default LatestArticles
