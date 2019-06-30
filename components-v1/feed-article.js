import React from 'react'
import { Link } from 'gatsby'

const FeedArticle = ({ node }) => {
  const { fields, frontmatter, timeToRead } = node
  return (
    <div className="article-preview">
      <Link to={fields.slug}>
        <h2 className="article-preview-link">{frontmatter.title}</h2>
      </Link>
      <p className="article-date">
        {frontmatter.date} <span className="big-dot">{' • '}</span>
        {timeToRead} min read
      </p>
      <p>{frontmatter.description}</p>
    </div>
  )
}

export default FeedArticle
