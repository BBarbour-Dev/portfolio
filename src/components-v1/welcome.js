import React from 'react'

import FrontImage from '../components/front-image'
import Tech from '../components/tech'

const Welcome = ({ title, subtitle }) => {
  return (
    <section className="welcome">
      <div className="welcome-left">
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <h2>{subtitle}</h2>
        <Tech />
      </div>
      <FrontImage />
    </section>
  )
}

export default Welcome
