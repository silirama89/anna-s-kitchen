import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='foot-icons'>
        <i class="fab fa-instagram-square"></i>
        <i class="fas fa-phone-alt"></i>
        <i class="fas fa-envelope"></i> <br />
      </div>
      <div className="web-developer">
        <i class="far fa-copyright"> 2021</i>
        <p className="dev-name">Amarilis Goodwin</p> 
      </div>   
    </div>
  )
}

export default Footer