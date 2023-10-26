import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import CartPage from './Cart'

// importing images

import search from '../img/search.png'
import cart from '../img/cart.png'

const Navbar = ({ scrollToSection }) => {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='left-point'>
                    <Link className='link' to='/'><h1>Rosé</h1></Link>
                </div>
                <div className='mid-point'>
                    <ul>
                        <li><button onClick={() => scrollToSection('price-section')} >Price</button></li>
                        <li><button onClick={() => scrollToSection('about-section')}>About</button></li>
                        <li><button onClick={() => scrollToSection('products-section')}>Products</button></li>
                    </ul>
                </div>
                <div className='right-point'>
                    <img className='search' src={search} alt='icons' />
                    
                    <Link to='/checkout' component={CartPage} ><img className='shop' src={cart} alt='icons' /></Link>
                
                </div>
            </div>
        </div>
    )
}

export default Navbar