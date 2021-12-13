
import React from 'react'
import './Menu.css'

function Menu(props) {
  const dinnerPartyItems = props.menu.filter(item => (item.fields.occasion === 'dinner party'))
  const eventItems = props.menu.filter(item => (item.fields.occasion === 'event'))
  const otherItems = props.menu.filter(item => (item.fields.occasion === 'other'))

  return (
    
    <div className='menu'>
      <div className='dinner-menu'>
        <h3 className='menu'>Family Dinners</h3>
        {dinnerPartyItems.map(item => (
          <>
              <h4 className='menu'>{item.fields.name}</h4>
              <p className='appetizer'>{item.fields.horsdoeuvres}</p>
              <p className='entree'>{item.fields.entree}</p>
              <p className='sides'>{item.fields.sides}</p>
              <p className='dessert'>{item.fields.dessert}</p>
          </> ))
        }
      </div>

      <div className='event-menu'>
        <h3 className='menu'>Events</h3>
        {eventItems.map(item => (
          <>
              <h4 className='menu'>{item.fields.name}</h4>
              <p className='entree'>{item.fields.entree}</p>
              <p className='sides'>{item.fields.sides}</p>
              <p className='dessert'>{item.fields.dessert}</p>
          </> ))
        }
      </div>

      <div className='other'>
        <h3 className='menu'>Other</h3>
        {otherItems.map(item => (
          <>
              <h4 className='menu'>{item.fields.name}</h4>
              <p className='entree'>{item.fields.entree}</p>
              <p className='sides'>{item.fields.sides}</p>
              <p className='dessert'>{item.fields.dessert}</p>
          </>))
        }
      </div>

    </div>
  )
}

export default Menu