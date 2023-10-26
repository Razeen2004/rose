import React, { useState, useEffect } from 'react';
import './Product.css';
import productImage from '../img/Product1.png';

const Product = ({ }) => {


  return (
    <div className="product">
      <form onSubmit={{}}>
        <div className="container">
          <div className="left-sec">
            <img src={productImage} alt="" />
            <div className="text">
              <h2></h2>
              <h3></h3>
              <h2>$</h2>
              <span>Total: ${}</span>
            </div>
          </div>
          <div className="right-sec">
            <div className="number">
              <span onClick={{}} className="minus">-</span>
              <input type="text"  readOnly />
              <span onClick={{}} className="plus">+</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;
