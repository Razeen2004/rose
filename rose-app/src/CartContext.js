import React, { useState, createContext } from 'react';

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  setCart: () => {},  // Add this line
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Implement the logic to add products to the cart
    // This might involve updating the cart state using setCart
  };

  

  return (
    <CartContext.Provider value={{ cart, addToCart,setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};