import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AllProjects from '../components/all-projects'

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <AllProjects />
    </Layout>
  )
}

export default ProjectsPage
