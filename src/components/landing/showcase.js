import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ProjectCard from '../projectcard/projectcard'

const Showcase = () => {
  const data = useStaticQuery(graphql`
    {
      allProjects(
        filter: { favorite: { eq: true } }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          name
          date
          description
          image
          type
          date
          favorite
          github
          live
        }
      }
    }
  `)
  const projects = data.allProjects.nodes
  return (
    <ShowcaseStyle>
      <h1>Project Showcase</h1>
      <div className="cards">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />
        })}
      </div>
      <div className="more">
        <Link to="/projects">More Projects →</Link>
      </div>
    </ShowcaseStyle>
  )
}

const ShowcaseStyle = styled.section`
  margin-bottom: 2rem;

  h1 {
    margin: 2rem 0;
  }

  .more {
    width: 100%;
    font-family: var(--secondary-font);
    color: var(--primary);
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    text-align: right;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

export default Showcase
