
import React from 'react'
import './Menu.css'

function Menu(props) {
  return (
    
    <div>
      <div className='dinner-menu'>
        <h3>Family Dinners</h3>
        {props.menu.map(item => (
          item.occasion === 'dinner party'?  
            <>
              <h4>{item.name}</h4>
              <p className='appetizer'>{item.horsdoeuvres}</p>
              <p className='entree'>{item.entree}</p>
              <p className='sides'>{item.sides}</p>
              <p className='dessert'>{item.dessert}</p>
            </> :
            <></>))
        }
      </div>

      <div className='event-menu'>
        <h3>Events</h3>
        {props.menu.map(item => (
          item.occasion === 'event'?  
            <>
              <h4>{item.name}</h4>
              <p className='entree'>{item.entree}</p>
              <p className='sides'>{item.sides}</p>
              <p className='dessert'>{item.dessert}</p>
            </> :
            <></>))
        }
      </div>

      <div className='other'>
        <h3>Other</h3>
        {props.menu.map(item => (
          item.occasion === 'other'?  
            <>
              <h4>{item.name}</h4>
              <p className='entree'>{item.entree}</p>
              <p className='sides'>{item.sides}</p>
              <p className='dessert'>{item.dessert}</p>
            </> :
            <></>))
        }
      </div>

    </div>
  )
}

export default Menu