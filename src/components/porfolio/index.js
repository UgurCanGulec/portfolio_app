import React from 'react'
import "./style.css"

const Portfolio = ({heading, text}) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Portfolio
