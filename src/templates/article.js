import React from 'react'
import { graphql, Link } from 'gatsby'

const Article = ({ data, location }) => {
  console.log(location)
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <div>
      <h1>Layout</h1>
    </div>
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
