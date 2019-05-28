import React from 'react'

import { FaVideo, FaGithub } from 'react-icons/fa'

import ProjectImage from '../components/project-image'

const ProjectCard = ({ project, all }) => {
  const allProjects = all ? 'all-projects' : ''
  return (
    <div className={`project-card ${allProjects}`}>
      <ProjectImage path={project.image} alt={project.title} />
      <h2>{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-link-row">
        <div className="project-link">
          <FaVideo /> <span>Live:</span> <a href={project.live}>Click Here</a>
        </div>
        <div className="project-link">
          <FaGithub /> <span>Github:</span>{' '}
          <a href={project.github}>Click Here</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
