import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import ProjectCard from './projectcard'

const AllProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjects(sort: { fields: date, order: DESC }) {
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
    <ProjectsStyle>
      <h1>All Projects</h1>
      <div className="cards">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />
        })}
      </div>
    </ProjectsStyle>
  )
}

const ProjectsStyle = styled.section`
  margin: 2rem 0 4rem 0;

  h1 {
    margin: 2rem 0 4rem 0;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

export default AllProjects
