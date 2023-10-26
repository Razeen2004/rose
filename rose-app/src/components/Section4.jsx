import React from 'react'
import './Section4.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'

import Product from '../img/product.png'

const Section4 = ({}) => {
  const { cart, setCart } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);

  const product = [
    { title: 'Premium Rose Wine', model: 'TRX - 290', price: 199.9 },
    { title: 'Deluxe White Wine', model: 'TRX - 300', price: 249.99 },
    { title: 'Purple Grape Wine', model: 'TRX - 310', price: 49.99 },
  ];

  const handleAddToCart = (index) => {
    const selectedProduct = product[index];
    const existingCartItem = cart.find(item => item.title === selectedProduct.title);
  
    if (existingCartItem) {
      // Increment quantity if the product is already in the cart
      const updatedCart = cart.map(item => 
        item.title === selectedProduct.title 
        ? { ...item, quantity: item.quantity + 1 }
        : item
      );
      setCart(updatedCart);
    } else {
      // Add the product to the cart with quantity 1
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
    }
    console.log('Product added to cart:', selectedProduct);
  };


  return (
    <div className='section4'>
      <div className="container">
        <div className="top-sec">
          <span></span>
          <h1>Elevating the Art of Wine</h1>
        </div>
        <div className="bottom-sec">
          {product.map((product, index) => (
            <img key={index} onClick={() => handleAddToCart(index)} src={Product} alt="product" />
          ))}
          {product.map((product, index) => (
            <img key={index} onClick={() => handleAddToCart(index)} src={Product} alt="product" />
          ))}
          {product.map((product, index) => (
            <img key={index} onClick={() => handleAddToCart(index)} src={Product} alt="product" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section4