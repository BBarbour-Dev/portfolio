import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectImage = ({ path, alt }) => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const image = data.allFile.edges.filter(edge => {
    return edge.node.relativePath === path
  })
  const { fluid } = image[0].node.childImageSharp
  return (
    <figure class="project-image">
      <Img fluid={fluid} alt={alt} st />
    </figure>
  )
}

export default ProjectImage
