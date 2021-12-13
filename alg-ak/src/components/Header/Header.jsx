import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src="https://res.cloudinary.com/silirama89/image/upload/v1639271574/alg-ak/ak-logo-2_3x_qsnqlq.png" alt="anna_s kitchen logo" className="logo" />
        <h5 className='phrase'>“To be a good cook you have to have a love of the good, a love of hard work, and a love of creating."</h5>
        <h6 className='phrase'> - Julia Child -</h6>
      </div>  
    </div>
  )
}

export default Header