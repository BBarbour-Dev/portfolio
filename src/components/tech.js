import React from 'react'

import {
  DiJavascript1,
  DiHtml5,
  DiCss3Full,
  DiFirebase,
  DiNodejsSmall,
  DiReact,
  DiGit
} from 'react-icons/di'

const Tech = ({ data }) => {
  return (
    <div className="tech-row">
      <DiJavascript1 />
      <DiHtml5 />
      <DiCss3Full />
      <DiReact />
      <DiFirebase />
      <DiNodejsSmall />
      <DiGit />
    </div>
  )
}

export default Tech
