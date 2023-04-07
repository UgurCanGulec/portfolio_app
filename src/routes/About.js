import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Portfolio from '../components/porfolio'
import AboutContent from '../components/aboutcontent'



const About = () => {
  return (
    <div>
      <Navbar />
      <Portfolio heading="ABOUT" text="I'am a friendly Java Developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
