import React from 'react'
import { Link } from 'gatsby'

import { FaVideo, FaGithub } from 'react-icons/fa'

import ProjectImage from '../components/project-image'

const ProjectCard = ({ project, all }) => {
  const allProjects = all ? 'all-projects' : ''
  return (
    <div className={`project-card ${allProjects}`}>
      <ProjectImage path={project.image} alt={project.name} />
      <Link to={project.live}>
        <h2>{project.name}</h2>
      </Link>
      <p className="project-description">{project.description}</p>
      <div className="project-link-row">
        <div className="project-link">
          <FaVideo /> <a href={project.live}>Live Website</a>
        </div>
        <div className="project-link">
          <FaGithub /> <a href={project.github}>Github Repo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
