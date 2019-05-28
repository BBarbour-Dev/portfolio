import React from 'react'

const Showcase = ({ projects }) => {
  return (
    <section className="section">
      <h1>Project Showcase</h1>
      {projects.map((project, index) => {
        return <p>Project</p>
      })}
    </section>
  )
}

export default Showcase
