import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Portfolio from '../components/porfolio'
import PricingCard from '../components/pricingcard'
import WorkData from '../components/work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Portfolio 
        heading="PROJECTS." 
        text="Some of my recent works"
      />
      <WorkData />
      <PricingCard/>
      <Footer />
    </div>
  )
}

export default Project
