import React from 'react'
import "./style.css"
import { FaHome, FaLinkedin, FaMailBulk, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa" 

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginLeft: "2rem"}}/>
                    <div>
                        <h4>BOLU/TURKIYE</h4>
                    </div>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color: "#fff", marginLeft: "2rem"}}/>
                    <div>
                        <h4>gulecugurcan@gmail.com</h4>
                    </div>
                </div>
            </div>
    
            <div className="right">
                <h4>About me</h4>
                <p>
                   This is me Ugur Can Gulec. I am a Java Developer.
                   I enjoy developing new web project and using 
                   new technologies.
                <div className="social">
                   <a href='https://twitter.com/ucangulec'> <FaTwitter size={30} style={{color: "#fff", marginLeft: "1rem"}}/></a>
                   <a href='https://tr.linkedin.com/in/ucangulec'><FaLinkedin size={30} style={{color: "#fff", marginLeft: "1rem"}}/></a>
                   <a href='https://github.com/UgurCanGulec'><FaGithub size={30} style={{color: "#fff", marginLeft: "1rem"}}/></a>
                </div>  
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
