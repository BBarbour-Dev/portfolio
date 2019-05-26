import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FrontImage = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "me3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      const { fluid } = data.file.childImageSharp
      return (
        <div className="welcome-right">
          <div className="my-image">
            <Img fluid={fluid} />
          </div>
        </div>
      )
    }}
  />
)

export default FrontImage
