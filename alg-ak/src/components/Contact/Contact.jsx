import React from 'react'
import './Contact.css'
import Form from './Form.jsx'

function Contact() {
  return (
    <div>
      <Form />
      
      <div className='contact-info'>
        <h3>CONTACT US:</h3>
        <img src='' alt='phone-icon'/><p>626-236-0305</p>
        <img src='' alt='at-icon'/><p>annalouisegoodwin@gmail.com</p>
        <img src='' alt='ig-icon'/><p>@annaskitchen</p>
        <img src='' alt='target-icon'/><p>Pasadena, CA</p>
      </div>  
    </div>
  )
}

export default Contact