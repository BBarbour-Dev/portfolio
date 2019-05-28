import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FrontImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "cartoonme.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const { fluid } = data.file.childImageSharp
  return (
    <div className="welcome-right">
      <div className="my-image">
        <Img fluid={fluid} />
      </div>
    </div>
  )
}

export default FrontImage
