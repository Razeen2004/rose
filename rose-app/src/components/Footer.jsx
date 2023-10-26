import React from 'react'
import './Footer.css'


import social1 from '../img/TwitterX.png'
import social2 from '../img/Facebook.png'
import social3 from '../img/LinkedIn.png'

const Footer = () => {


    return (
        <div className='footer'>
            <div className="container">
                <div className='footer-element'>
                    <h2 className='rose'>Rosé</h2>
                </div>
                <div className='footer-element'>
                    <h2>All Rights Reserved</h2>
                </div>
                <div className='footer-element'>
                    <img src={social1} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer