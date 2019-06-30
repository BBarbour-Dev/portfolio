import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    {
      allDevArticles(
        filter: { article: { tags: { ne: "help" } } }
        sort: { fields: [article___published_timestamp], order: DESC }
        limit: 5
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
  return <div />
}

export default LatestArticles
