import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "cartoonme.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <HeaderStyle>
      <div className="header-image">
        <Img fixed={data.file.childImageSharp.fixed} alt="Cartoon Brian" />
      </div>
      <h1>
        Hello,
        <br /> I'm Brian
      </h1>
      <h2>A Fullstack Software Engineer and Javascript enthusiast.</h2>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  width: 100%;
  background-color: var(--primary);
  padding: 4rem;

  .header-image {
    text-align: center;
    img {
      border-radius: 50%;
    }
  }

  h1 {
    font-size: 4rem;
    font-family: var(--secondary-font);
    color: var(--light);
    text-transform: none;
    text-align: center;
    margin: 1rem 0;
    font-weight: 400;
  }

  h2 {
    font-size: 1.6rem;
    font-family: var(--secondary-font);
    color: var(--dull);
    text-align: center;
    font-weight: 400;
  }
`

export default Header
