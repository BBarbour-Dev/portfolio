import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTwitter
} from 'react-icons/fa'

const MobileFooter = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "avatar2.jpg" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <FooterStyle>
      <div className="top-row">
        <p className="copy">
          © {new Date().getFullYear()}. Built with{' '}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{' '}
          and love.
        </p>
        <div className="avatar">
          <Img fixed={data.file.childImageSharp.fixed} alt="Real Brian" />
        </div>
      </div>
      <div className="contact-row">
        <a href="mailto:brian@bbarbour.dev">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/steelvoltage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-barbour-971864186/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/brian.barbour.31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/steelvoltage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 0 2rem;

  .top-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 0.5rem 1rem;
    border-top: 1px solid var(--dull);
  }

  .copy {
    font-size: 1rem;
    text-align: left;
  }

  .avatar {
    img {
      border-radius: 0.5rem;
    }
  }

  .contact-row {
    display: flex;
    justify-content: flex-end;
    font-size: 3rem;
    padding: 0rem 1rem 2rem 1rem;

    a {
      text-decoration: none;
      color: var(--dark);
    }

    a:hover {
      color: var(--primary);
    }

    a:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  /* @media (min-width: 1000px) {
    display: none;
  } */
`

export default MobileFooter
