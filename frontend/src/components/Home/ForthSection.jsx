import React from 'react'
import './ForthSection.css'
import product from './images/Bottle.png'
const ForthSection = () => {
  return (
    <div className='section4'>
        <div className="top">
            <span></span>
            <h2>Elevating the Art of Wine</h2>
        </div>
        <div className="bottom">
            <div className="product-cards">
                <div className="product-card">
                    <div className="card-top">
                        <img src={product} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h2>$200</h2>
                        <p>Rose Premium</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="card-top">
                        <img src={product} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h2>$200</h2>
                        <p>Rose Premium</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="card-top">
                        <img src={product} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h2>$200</h2>
                        <p>Rose Premium</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForthSection