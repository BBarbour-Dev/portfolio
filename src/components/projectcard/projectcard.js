import React from 'react'
import styled from 'styled-components'

import { FaDesktop, FaGithub } from 'react-icons/fa'

import ProjectCardImage from './project-card-image'

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardStyle>
      <div className="image">
        <ProjectCardImage path={project.image} alt={project.name} />
      </div>
      <div className="project">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="links">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <FaDesktop style={{ position: 'relative', top: '2px' }} /> Website
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ position: 'relative', top: '2px' }} /> Github
        </a>
      </div>
    </ProjectCardStyle>
  )
}

const ProjectCardStyle = styled.article`
  max-width: 300px;
  border: 2px solid var(--dull);
  box-shadow: 0 0.2rem 0.4rem #57575773;
  margin-bottom: 2rem;

  .project {
    h3 {
      text-align: center;
      padding: 0.5rem;
    }

    p {
      text-align: justified;
      padding: 0.5rem;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 2px solid var(--dull);
    text-align: center;

    a {
      flex-basis: 50%;
      font-size: 1.4rem;
    }
  }
`

export default ProjectCard
