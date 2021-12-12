import React from 'react'

function Reviews(props) {
  return (
    <div className='reviews'>
      {props.reviews.map(item => (
        <review>
          <h4 className='client'>{item.client}</h4>
          <p className='review'>{item.review}</p>           
        </review>)) 
      }
    </div>
  )
}

export default Reviews
