import React from 'react'

function Form() {
  return (
    <div>
      <h3>Join our mailing list!</h3>
      <label>Name</label> <input className='name'></input>
      <label>Phone</label> <input className='phone'></input>
      <label>E-mail</label> <input className='email'></input>
      <label> Birthday</label> <input className='dob'></input>
      <label>Anniversary</label> <input className='doa'></input>
      <label>State</label> <input className='state'></input>
      <label>ZIP Code</label> <input className='zipcode'></input>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default Form