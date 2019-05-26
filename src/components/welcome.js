import React from 'react'
import FrontImage from '../components/front-image'

const Welcome = ({ data }) => {
  const { title, subtitle } = data
  return (
    <section className="welcome">
      <div className="welcome-left">
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <h2>{subtitle}</h2>
      </div>
      <FrontImage />
    </section>
  )
}

export default Welcome
