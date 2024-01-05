import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Navbar2';
import Footer from './Footer';
import './Cart.css';
import Product from './Product';
import { CartContext } from '../CartContext';
import gsap from 'gsap';


import verified from '../img/verified.png'

const Cart = ({ products }) => {

    const [name, setName] = useState("");
    const [mob, setMob] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const [selectedOption, setSelectedOption] = useState("");

    const [isAnimationVisible, setIsAnimationVisible] = useState(false);

    useEffect(() => {
        if (isAnimationVisible) {
            gsap.to('.checkout-done', { duration: 1, y: '-50%', opacity: 1, ease: 'power4.inOut' });
            gsap.to('.checkout-done', { delay: 3, duration: 1, y: '-250%', opacity: 1, ease: 'power4.inOut' });
        }
    }, [isAnimationVisible]);

    const submitTheOrder = (e) => {
        e.preventDefault()
        console.log(name,mob,email,city,address,state,zip,selectedOption)
        
    }

    const handleOptionChange = () => {
    }

    return (
        <div className="cart">
            <Navbar />
            <div className="content">
                <div className="container">
                    <div className="left-content">
                        <div className="left-top">
                            <h2>Delivery Information</h2>
                            <div className="box">
                                <div className="input-sec">
                                    <label>
                                        Name* <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} name="name" placeholder='Enter your Name' />
                                    </label>
                                    <label>
                                        Mobile Number* <input type='text' value={mob} onChange={(e) => { setMob(e.target.value) }} name="mobileNumber" placeholder='Mobile No' />
                                    </label>
                                </div>
                                <div className="input-sec">
                                    <label>
                                        Email* <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder='Enter your Email' />
                                    </label>
                                    <label>
                                        City* <input type='text' value={city} onChange={(e) => { setCity(e.target.value) }} name="city" placeholder='City' />
                                    </label>
                                </div>
                                <div className="input-sec">
                                    <label>
                                        Address* <input type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} name="address" placeholder='Address' />
                                    </label>
                                    <div>
                                        <label>
                                            State* <input type='text' value={state} onChange={(e) => { setState(e.target.value) }} name="state" placeholder='State' />
                                        </label>
                                        <label>
                                            Zip* <input type='text' value={zip} onChange={(e) => { setZip(e.target.value) }} name="zip" placeholder='Zip' />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-bottom">
                            <h2>Payment Method</h2>
                            <div className="box">
                                <form onSubmit={{}}>
                                    <label className={`checkbox ${selectedOption === 'Online' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="Online"
                                            onChange={(e)=>{setSelectedOption("Online")}}
                                        />
                                        Online Payment
                                    </label>

                                    <label className={`checkbox ${selectedOption === 'Cash' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="Cash"
                                            onChange={(e)=>{setSelectedOption("Cash")}}
                                        />
                                        Cash On Delivery
                                    </label>

                                    <label className={`checkbox ${selectedOption === 'POS' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="POS"
                                            onChange={(e)=>{setSelectedOption("POS")}}
                                        />
                                        POS On Delivery
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <form onSubmit={submitTheOrder} >
                            <h2>Order Summary</h2>
                            <div className="box">
                                <div className="product-sec">
                                    <div className="product-inner">
                                        <Product />
                                    </div>
                                </div>
                                <div className="checkout-sec">
                                    <span></span>
                                    <div className="subtotal">
                                        <h2>Subtotal</h2>
                                        <p id='subtotal'>$</p>
                                    </div>
                                    <div className="shipping">
                                        <h2>Shipping</h2>
                                        <p id='shipping'>--</p>
                                    </div>
                                    <span></span>
                                    <div className="total">
                                        <h2>Total</h2>
                                        <p id='total'>$</p>
                                    </div>
                                    <div className="checkout-btn">
                                        <button type="submit">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="checkout-done">
                <svg xmlns="http://www.w3.org/2000/svg" width="363" height="348" viewBox="0 0 363 348" fill="none">
                    <path d="M11.3856 3.42032L9.14242 6.62487C8.88068 6.99878 8.72707 7.4406 8.69895 7.89615C1.2953 127.813 -1.1573 231.054 7.50067 312.691C8.53367 323.845 12.5826 346.029 20.5143 345.533H285.111H340.88C355.752 345.533 353.274 330.661 356.371 296.58C363.171 192.748 362.572 81.5196 353.961 7.1607C353.916 6.77178 353.78 6.40712 353.563 6.08131L351.854 3.5165C350.986 2.21472 349.145 2.03218 348.039 3.13834L344.026 7.15083C343.001 8.17621 341.318 8.10622 340.381 6.99922L337.045 3.05642C336.108 1.94943 334.426 1.87944 333.4 2.90482L329.002 7.30294C328.034 8.27093 326.465 8.27092 325.497 7.30291L320.947 2.75271C319.979 1.78473 318.409 1.7847 317.441 2.75265L312.891 7.30304C311.923 8.27098 310.353 8.27097 309.385 7.303L304.835 2.7527C303.867 1.78472 302.298 1.78472 301.33 2.75269L296.78 7.30297C295.812 8.27095 294.242 8.27095 293.274 7.30298L288.724 2.75269C287.756 1.78472 286.187 1.78471 285.219 2.75269L280.668 7.30297C279.7 8.27095 278.131 8.27095 277.163 7.30298L272.613 2.75269C271.645 1.78472 270.075 1.78471 269.107 2.75269L264.557 7.30297C263.589 8.27095 262.02 8.27095 261.052 7.30298L256.501 2.75269C255.533 1.78472 253.964 1.78471 252.996 2.75269L248.446 7.30297C247.478 8.27095 245.908 8.27095 244.94 7.30298L240.39 2.75269C239.422 1.78472 237.853 1.78471 236.885 2.75269L232.335 7.30297C231.367 8.27095 229.797 8.27095 228.829 7.30298L224.279 2.75269C223.311 1.78472 221.742 1.78471 220.774 2.75269L216.223 7.30297C215.255 8.27095 213.686 8.27095 212.718 7.30298L208.168 2.75269C207.2 1.78472 205.63 1.78471 204.662 2.75269L200.112 7.30297C199.144 8.27095 197.575 8.27095 196.607 7.30298L192.056 2.75269C191.088 1.78472 189.519 1.78471 188.551 2.75269L184.001 7.30297C183.033 8.27095 181.463 8.27095 180.495 7.30298L175.945 2.75269C174.977 1.78472 173.408 1.78471 172.44 2.75269L167.889 7.30298C166.921 8.27095 165.352 8.27095 164.384 7.30298L159.834 2.75268C158.866 1.78471 157.296 1.78472 156.328 2.75269L151.778 7.30297C150.81 8.27095 149.241 8.27095 148.273 7.30297L143.723 2.75269C142.755 1.78472 141.185 1.78471 140.217 2.75269L135.667 7.30297C134.699 8.27095 133.13 8.27095 132.162 7.30298L127.611 2.75269C126.643 1.78472 125.074 1.78471 124.106 2.75269L119.556 7.30297C118.588 8.27095 117.018 8.27095 116.05 7.30298L111.5 2.75269C110.532 1.78472 108.963 1.78471 107.995 2.75269L103.444 7.30297C102.476 8.27095 100.907 8.27095 99.939 7.30298L95.3888 2.75269C94.4208 1.78472 92.8514 1.78471 91.8834 2.75269L87.3331 7.30297C86.3652 8.27095 84.7958 8.27095 83.8278 7.30297L79.2775 2.75269C78.3095 1.78472 76.7401 1.78472 75.7722 2.75269L71.2219 7.30297C70.2539 8.27095 68.6845 8.27095 67.7165 7.30297L63.1663 2.75269C62.1983 1.78472 60.6289 1.78471 59.6609 2.75269L55.1106 7.30297C54.1427 8.27095 52.5733 8.27095 51.6053 7.30298L47.055 2.75269C46.087 1.78472 44.5176 1.78472 43.5496 2.75269L38.9994 7.30297C38.0314 8.27095 36.462 8.27095 35.494 7.30297L30.9437 2.75269C29.9758 1.78472 28.4064 1.78472 27.4384 2.75269L22.8881 7.30297C21.9201 8.27095 20.3507 8.27094 19.3828 7.30297L15.1689 3.08907C14.0791 1.99925 12.2694 2.1577 11.3856 3.42032Z" fill="#2A0F0F" fill-opacity="0.93" stroke="#2A0F0F" stroke-width="3" />
                </svg>
                <div className="content">
                    <h2>Thank you</h2>
                    <h3>Your order is placed.</h3>

                    <img src={verified} alt="" />
                    <p>The amount is deducted from your bank account</p>
                    <span className='amount'>$</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
