import React from 'react'
import './Banner.css'


import Box from '../img/box.png'

const Banner = () => {
    return (
        <div className='banner'>
            <span className='rose'>ROSé</span>
            <div className="container">
                <div className="text-sec">
                    <span></span>
                    <h2>Every Bottle  Tells a Story</h2>
                </div>
            </div>
            <img className='bottle1' src={Box} alt='box' />
            <img className='bottle2' src={Box} alt='box' />
        </div>
    )
}

export default Banner