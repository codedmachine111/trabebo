import React from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'
export default function Form() {

  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_ovl2n1s', 'template_hgehiwa', e.target, 'QT5ltA7BuoH7IMiRu')
      .then((result) => {
          alert("Mail sent successfully!")
      }, (error) => {
          alert("An error occurred! Please try again later.");
      })

    e.target.reset()
  }
  return (
    <>
  <form className="form" id="contact-form" onSubmit={handleSubmit}>
      <div class="inputbox">
        <h3>Your Name*</h3>
        <input type="text" required name="fullName"/>
      </div>
      <div class="inputbox">
        <h3>Email Address*</h3>
        <input type="email" className="mail" placeholder={"abc@gmail.com"} required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email"/>
      </div>
      <div class="inputbox">
        <h3>Contact Number*</h3>
        <input type="tel" maxlength="10" placeholder={"Number"} required pattern="[0-9]{10}" name="contact"/>
      </div>
      <div class="inputbox">
        <h3>Description*</h3>
        <textarea placeholder={"Write to us"} required name="info"></textarea>
      </div>
      <div class="sub-btn">
        <button type="submit" class="subbtn">Submit</button>
      </div>
    </form>
    </>
  )
}

