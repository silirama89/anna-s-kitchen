import React from 'react'
import './Contact.css'
import Form from './Form.jsx'

function Contact() {
  return (
    <div className='contact'>
            
      <div className='contact-info'>
        <h3 className='contact'>Contact us:</h3>
        <div className='info'>
        <i class="fas fa-phone-alt">     626-236-0305</i>
        </div>
        <div className='info'>
        <i class="fas fa-envelope">     annalouisegoodwin@gmail.com</i>
        </div>
        <div className='info'>
        <i class="fab fa-instagram-square">     @annaskitchen</i>
        </div>
        <div className='info'>
          <i class="fas fa-map-marker-alt">  Pasadena, CA</i>
        </div>
      </div>  
      
      <Form />
      
    </div>
  )
}

export default Contact