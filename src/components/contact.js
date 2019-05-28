import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTwitter
} from 'react-icons/fa'

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "avatar.jpg" }) {
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
    <div className="contact">
      <div className="contact-row">
        <h2 className="contact-h2">Contact Brian</h2>
        <div className="link-icons">
          <a href="mailto:steelvoltage@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/steelvoltage">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/brian-barbour-971864186/">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/brian.barbour.31">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/steelvoltage">
            <FaTwitter />
          </a>
        </div>
      </div>
      <figure className="avatar">
        <Img fluid={fluid} />
      </figure>
    </div>
  )
}

export default Contact