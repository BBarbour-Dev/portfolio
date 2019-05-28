import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectCard from '../components/project-card'

const AllProjects = () => {
  const data = useStaticQuery(graphql`
    {
      info {
        projects {
          name
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
  const { projects } = data.info
  return (
    <section className="section">
      <h1>All Projects</h1>
      <div className="project-row">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} all={true} />
        })}
      </div>
    </section>
  )
}

export default AllProjects
