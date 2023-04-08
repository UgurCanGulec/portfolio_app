import React from 'react'
import "./style.css"
import { useForm } from "react-hook-form"

const Form = () => {

  const {register, formState: {errors}, handleSubmit} = useForm()

  return (
    <div className="form">
        <form autoComplete='off' onSubmit={handleSubmit((data) => console.log(data))}>
            <label>Your Name</label>
            <input {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
              },
              maxLength: {
                value: 30,
              }
            })} 
            type="text"
            placeholder={errors.name?.message}
            />
            <label>Email</label>
            <input  {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must me valid"
              }
            })} 
            type="text"
            placeholder={errors.email?.message}
            />
            <label>Subject</label>
            <input  {...register("subject", {
                 required: "Subject is required",
                 minLength: {
                   value: 5,
                 },
                 maxLength: {
                   value: 40,
                 }
            })} 
            type="text" 
            placeholder={errors.subject?.message}
            />
            <label>Message</label>
            <textarea  {...register("message", {
                   required: "Mesage is required",
                   minLength: {
                     value: 10,
                   },
                   maxLength: {
                     value: 400,
                   }
            })} 
            rows="6" 
            placeholder={errors.message?.message}/>
            <button className='btn' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form
