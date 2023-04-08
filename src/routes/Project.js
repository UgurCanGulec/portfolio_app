import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Portfolio from '../components/porfolio'
import CodeCard from '../components/codecard'
import WorkData from '../components/work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Portfolio 
        heading="ARTICLES." 
        text="Some of my recent works and articles."
      />
      <WorkData />
      <CodeCard heading="Projects"/>
      <Footer />
    </div>
  )
}

export default Project
