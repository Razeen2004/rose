import React from 'react'
import './Slide.css'
import BottleBox from './images/White Paper Box Mockup (Closed) label.png'
const Slide = () => {
  return (
    <div className='slide'>
        <div className='slide-container'>
            <span></span>
            <h2>Every Bottle  Tells a Story</h2>

            <img className='bottle1' src={BottleBox} alt="" />
            <img className='bottle2' src={BottleBox} alt="" />
        </div>
    </div>
  )
}

export default Slide