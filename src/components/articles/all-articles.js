import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Article from '../articles/article'

const AllArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allDevArticles(
        filter: { article: { tags: { ne: "help" } } }
        sort: { fields: [article___published_timestamp], order: DESC }
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
    <ArticlesStyle>
      <h1>All Articles</h1>
      <div className="article-list">
        {articles.map(article => {
          return <Article article={article} key={article.node.article.id} />
        })}
      </div>
    </ArticlesStyle>
  )
}

const ArticlesStyle = styled.section`
  margin: 2rem 0 4rem 0;

  h1 {
    margin: 2rem 0 4rem 0;
  }

  .article-list {
    article:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export default AllArticles
