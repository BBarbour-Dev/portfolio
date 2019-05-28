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
      <div className="tooltip">
        <span className="tooltiptext">JavaScript</span>
        <DiJavascript1 />
      </div>
      <div className="tooltip">
        <span className="tooltiptext">HTML5</span>
        <DiHtml5 />
      </div>
      <div className="tooltip">
        <span className="tooltiptext">CSS3</span>
        <DiCss3Full />
      </div>
      <div className="tooltip">
        <span className="tooltiptext">React</span>
        <DiReact />
      </div>
      <div className="tooltip">
        <span className="tooltiptext">Firebase</span>
        <DiFirebase />
      </div>
      <div className="tooltip">
        <span className="tooltiptext">NodeJS</span>
        <DiNodejsSmall />
      </div>
      <div className="tooltip">
        <span className="tooltiptext">Git</span>
        <DiGit />
      </div>
    </div>
  )
}

export default Tech
