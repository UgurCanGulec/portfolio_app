import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"
import React1 from "../../assets/react1.jpg"
import JavaImg from "../../assets/java.jpg"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I am a Java Developer. I create 
               backend and batch projects which have 
               rest and micro service based.
            </p>
            <Link to="/contact">
              <button className='btn btn-light'>Contact</button>
            </Link>
        </div>
        <div className="right">
           <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} alt="true" className='img'/>
                </div>
                <div className="img-stack bottom">
                    <img src={JavaImg} alt="true" className='img'/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AboutContent
