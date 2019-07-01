import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/layout/seo'
import AllProjects from '../components/projects/all-projects'

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="content-wrapper">
        <AllProjects />
      </div>
    </Layout>
  )
}

export default ProjectsPage
