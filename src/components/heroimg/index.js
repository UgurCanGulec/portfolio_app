import React from 'react'
import "./style.css"
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={IntroImg}  className='into-img' alt='IntroImg'/>
      </div>
      <div className="content">
        <p> HI I'AM UGUR CAN.</p>
        <h1>Java Developer</h1>
        <div>
           <Link to="/project" className='btn'>Projects</Link>
           <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
