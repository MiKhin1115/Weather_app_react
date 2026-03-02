import React from 'react'
import { WiDayCloudy, WiRain } from 'react-icons/wi'
import { RxBookmarkFilled } from 'react-icons/rx'

const Card = () => {
  return (
    <div className='d-flex flex-column align-items-center gap-3'>
      <p>Date</p>
      <h2>Place</h2>
      <h1><WiDayCloudy/></h1>
      <p><WiRain/></p>
      <p>Humidity:</p>
      <p>Dew point:</p>
      <p>Visibility:</p>
    </div>
  )
}

export default Card
