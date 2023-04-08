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
            <p>I work as Java Developer about 3 years. I develope full 
               stack micro service applications which are
               restful based. Also i write simple web pages 
               with React JS. 
            </p>
            <h1>Job Experinces</h1>
            <p> Proto Yazilim A.S - 17 August 2020 - 5 March 2023 </p>
            <p> Metasis Technology - 13 March 2023 - Now </p>
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
