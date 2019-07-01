import React from 'react'
import styled from 'styled-components'

import { FaComments, FaHeart } from 'react-icons/fa'

const Article = ({ article }) => {
  const {
    title,
    published_at,
    tag_list,
    url,
    comments_count,
    positive_reactions_count
  } = article.node.article
  const tags = tag_list.split(', ')
  return (
    <ArticleStyle>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      <p className="meta-data">
        <span className="date">{published_at}</span>
        <span className="big-dot">{' • '}</span>
        {tags.map((tag, id) => {
          return id === tags.length - 1 ? (
            <span key={id}>#{tag}</span>
          ) : (
            <span key={id}>#{tag}, </span>
          )
        })}
      </p>
      <p className="meta-data">
        <FaComments /> <span className="gap">{comments_count}</span> <FaHeart />{' '}
        {positive_reactions_count}
      </p>
    </ArticleStyle>
  )
}

const ArticleStyle = styled.article`
  h2 {
    font-family: var(--primary-font);
  }
  .meta-data {
    .date {
      text-transform: uppercase;
    }

    .big-dot {
      color: var(--secondary-dark);
      font-size: 2.5rem;
      vertical-align: middle;
    }

    .gap {
      margin-right: 1rem;
    }

    svg {
      font-size: 1.4rem;
      color: var(--primary);
      position: relative;
      top: 2px;
    }
  }
`

export default Article
