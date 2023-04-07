import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Portfolio from '../components/porfolio'
import Form from '../components/form'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Portfolio  heading="CONTACT." text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
