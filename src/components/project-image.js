import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectImage = ({ path }) => {
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
  console.log(image)
  const { fluid } = image[0].node.childImageSharp
  return (
    <div>
      <Img fluid={fluid} />
    </div>
  )
}

export default ProjectImage
