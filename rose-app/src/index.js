import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './CartContext';

render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
