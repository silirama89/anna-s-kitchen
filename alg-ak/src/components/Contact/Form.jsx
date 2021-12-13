import { useState } from 'react'
import { postClient } from '../../services'

function Form() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [doa, setDoa] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newClient = {
      name,
      email,
      phone,
      dob,
      doa,
      city,
      state,
      zip
    }
    await postClient(newClient)
  }  
    
  return (
    
    <div className='form'>
      <h3 className='contact'>Join our mailing list!</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
        <label>Name:</label><input
          name='Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>E-mail:</label><input
          name='E-mail'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>Phone:</label><input
          name='Phone number'
          type='integer'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>Birthday:</label><input
          name='DOB'
          type='date'
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>Anniversary:</label><input
          name='DOA'
          type='date'
          value={doa}
          onChange={(e) => setDoa(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>City:</label><input
          name='City'
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>ST:</label><input
          name='State'
          type='text'
          value={state}
          onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className='form-field'>
        <label>ZIP Code:</label><input
          name='ZIP Code'
          type='integer'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          />
          </div>
        <button type='submit'>Join!</button>
      </form>
    </div>
  )
}

export default Form