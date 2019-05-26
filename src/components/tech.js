import React, { useState } from 'react'

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
  console.log(data)
  const [js, setJS] = useState(false)
  const [html, setHtml] = useState(false)
  const [css, setCss] = useState(false)
  const [react, setReact] = useState(false)
  const [firebase, setFirebase] = useState(false)
  const [node, setNode] = useState(false)
  const [git, setGit] = useState(false)
  return (
    <section className="section" id="tech">
      <h1>Tech</h1>
      <div className="history">
        {js && <p>{data.js}</p>}
        {html && <p>{data.html}</p>}
        {css && <p>{data.css}</p>}
        {react && <p>{data.react}</p>}
        {firebase && <p>{data.firebase}</p>}
        {node && <p>{data.node}</p>}
        {git && <p>{data.git}</p>}
      </div>
      <div className="tech-row">
        <DiJavascript1
          onMouseOver={() => setJS(true)}
          onMouseLeave={() => setJS(false)}
        />
        <DiHtml5
          onMouseOver={() => setHtml(true)}
          onMouseLeave={() => setHtml(false)}
        />
        <DiCss3Full
          onMouseOver={() => setCss(true)}
          onMouseLeave={() => setCss(false)}
        />
        <DiReact
          onMouseOver={() => setReact(true)}
          onMouseLeave={() => setReact(false)}
        />
        <DiFirebase
          onMouseOver={() => setFirebase(true)}
          onMouseLeave={() => setFirebase(false)}
        />
        <DiNodejsSmall
          onMouseOver={() => setNode(true)}
          onMouseLeave={() => setNode(false)}
        />
        <DiGit
          onMouseOver={() => setGit(true)}
          onMouseLeave={() => setGit(false)}
        />
      </div>
    </section>
  )
}

export default Tech
