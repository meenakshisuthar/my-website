import React from 'react'
import "../styles/Contact.css"
import PizzaLeft from "../assets/pizzaLeft.jpg"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST' >
              <label htmlFor='name'>Full Name</label>
              <input name='name' placeholder='Enter full name...' type='text' required/>
              <label htmlFor='email'>Email</label>
              <input name='email' placeholder='Enter email...' type='email' required/>
              <label htmlFor='message'>Message</label>
              <textarea rows="6" placeholder='Enter message...' name='message' ></textarea>
              <button type='submit'>Send Message</button>
            </form>
        </div>

      
    </div>
  )
}

export default Contact
