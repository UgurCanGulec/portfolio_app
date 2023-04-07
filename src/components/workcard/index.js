import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

const WorkCard = ({imgsrc, title, text, view}) => {
  return (
    <div className="project-card">
    <img src={imgsrc} alt="img" />
    <h2 className='project-title'>{title}</h2>
    <div className="pro-details">
      <p>{text}</p>
      <div className="pro-buttons">
        <NavLink to={view} className="btn">
          View
        </NavLink>
        <NavLink to="/contact" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default WorkCard
