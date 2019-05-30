import React from 'react'

import { FaVideo, FaGithub } from 'react-icons/fa'

import ProjectImage from '../components/project-image'

const ProjectCard = ({ project, all }) => {
  const allProjects = all ? 'all-projects' : ''
  return (
    <div className={`project-card ${allProjects}`}>
      <ProjectImage path={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-link-row">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          Website <FaVideo style={{ position: 'relative', top: '2px' }} />
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          Github <FaGithub style={{ position: 'relative', top: '2px' }} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
