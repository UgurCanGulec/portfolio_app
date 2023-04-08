import React ,  { useRef } from 'react'
import "./style.css"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

  const form = useRef();

  const validateForm = (data) => {
      let name = data[0].value
      let email = data[1].value
      let subject = data[2].value
      let message = data[3].value
      if (name && email && subject && message) {
        return true
      }
      return false
  }

  const sendEmail = (e) => {
    e.preventDefault();
    let data = form.current
    let result = validateForm(data)
    if (result) {
      emailjs.sendForm('service_bit6s7b', 'template_w8j5ah5', form.current, 'DzCuNLgK3nARxJMuL')
      .then((result) => {
        toast.success('Email sent successfully.', {
          });
          console.log(result.text);
          console.log("Message sent.")
      }, (error) => {
          console.log(error.text);
          console.log("Error while sending mail !")
          toast.error('Error occurred while sending email');
          });
    } else {
      toast.error('Please fill in the fields. ');
    }
  };

  return (
    <div className="form">
      <ToastContainer/>
        <form autoComplete='off' ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input
              type="text"
              name='user_name'
            />
            <label>Email</label>
            <input  
              type="email"
              name='user_email'
            />
            <label>Subject</label>
            <input  
              type="text" 
              name='subject'
            />
            <label>Message</label>
            <textarea  
              rows="6" 
              name='message'
            />
            <button className='btn' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form
