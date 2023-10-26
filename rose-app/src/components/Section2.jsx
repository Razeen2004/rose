import React from 'react'
import './Section2.css'



import Bottle from '../img/bottle.png'
import rightArrow from '../img/right-arrow.png'

const Section2 = () => {

  let price = 199.99

  return (
    <div  className='section2'>
      <div className='container'>
        <div className='left-side'>
          <div className='product-container'>
            <div className='top-content'>
              <span></span>
              <h2>Unlock the Elegance of Rosé</h2>
              <p>Embrace the allure of Rosé and elevate your moments to a whole new level of sophistication.
                Indulge in the exquisite taste of our carefully crafted Rosé, a wine that embodies elegance and captures the essence of fleeting,
                beautiful moments. Join the celebration and order your bottle of Rosé today.
                Experience the magic in every sip and toast to the extraordinary. Buy now and savor life's pleasures, one glass at a time.</p>
            </div>
            <div className='bottom-content'>
              <h2 className='product-name'>Rosé Premium Gold</h2>
              <div className='product-specs'>
                <div className='top-list'>
                  <div className='list'>  
                    <h2>Type</h2>
                    <h3>Rosé</h3>
                  </div>
                  <div className='list'>
                    <h2>Grape</h2>
                    <h3>Merlot</h3>
                  </div>
                  <div className='list'>
                    <h2>Bottle Size</h2>
                    <h3>750 ml</h3>
                  </div>
                </div>
                <div className='bottom-list'>
                  <div className='list'>
                    <h2>Dosage</h2>
                    <h3>Semi-Dry</h3>
                  </div>
                  <div className='list'>
                    <h2>Number</h2>
                    <h3>Semi-Dry</h3>
                  </div>
                  <div className='list'>
                    <h2>Released Date</h2>
                    <h3>1 - 1 - 2003</h3>
                  </div>
                </div>
                <span></span>
                <div className='volume-sec'>
                  <h2>Volume Left</h2>
                  <div className='volume'></div>
                </div>
                <div className="add-to-cart">
                    <button>Add to Cart <img src={rightArrow} alt="" /> </button>
                  <h2 className='price'>$ {price}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-side'>
          <div className='bottle-container'>
            <img src={Bottle} alt='bottle' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2