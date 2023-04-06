import React from 'react'
import "./style.css"
import pro1 from "../../assets/project1.png"
import { Link } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className='project-title'>Project Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-buttons">
              <Link to="/contact" className="btn">
                View
              </Link>
              <Link to="/contact" className="btn">
                Source
              </Link>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className='project-title'>Project Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-buttons">
              <Link to="/contact" className="btn">
                View
              </Link>
              <Link to="/contact" className="btn">
                Source
              </Link>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className='project-title'>Project Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-buttons">
              <Link to="/contact" className="btn">
                View
              </Link>
              <Link to="/contact" className="btn">
                Source
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
