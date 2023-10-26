import './App.css';
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import { CartProvider } from './CartContext';
import Signup from './components/Signup';

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  const price = useRef(null);
  const about = useRef(null);
  const products = useRef(null);

  const scrollToSection = (sectionId) => {
    const ref = sectionId === 'price-section' ? price :
      sectionId === 'about-section' ? about :
        sectionId === 'products-section' ? products : null;

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='page'>
            <Section1 scrollToSection={scrollToSection} />

            <div id='price-section' ref={price}>
              <Section2 />
            </div>
            <div id='about-section' ref={about}>
              <Section3 />
            </div>
            <div id='products-section' ref={products}>
              <Section4 />
            </div>
            <Banner />
            <Footer />
            {/* <RoseWebsite/> */}
          </div>} />

          <Route path='/checkout' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;