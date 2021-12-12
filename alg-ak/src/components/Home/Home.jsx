import React from 'react'
import './Home.css'
import { grabReviews } from "./services"
import { useEffect, useState } from 'react';
import Gallery from './Gallery.jsx'
import Reviews from './Reviews.jsx'

function Home() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      const res = await grabReviews()
      setReviews(res)
    }
    getReviews()
  }, [])
  return (
    <div>
      <Gallery />
      <Reviews reviews={reviews} />
    </div>
  )
}

export default Home