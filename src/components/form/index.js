import React from 'react'
import "./style.css"

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" name="" id="" />
            <label>Email</label>
            <input type="text" name="" id="" />
            <label>Subject</label>
            <input type="text" name="" id="" />
            <label>Message</label>
            <textarea name="" id="" rows="6" placeholder='Type your message here...'/>
            <button className='btn'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form
