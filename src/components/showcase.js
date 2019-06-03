import React from 'react'
import { Link } from 'gatsby'

import ProjectCard from '../components/project-card'

const Showcase = ({ projects }) => {
  return (
    <section className="section">
      <h1>Project Showcase</h1>
      <div className="project-row">
        {projects.map((project, index) => {
          if (project.favorite === true) {
            return <ProjectCard project={project} key={index} />
          }
          return null
        })}
      </div>
      <div className="more">
        <Link to="/projects">More Projects →</Link>
      </div>
    </section>
  )
}

export default Showcase
