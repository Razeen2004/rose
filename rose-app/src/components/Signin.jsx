import React from 'react'
import './Signin.css'

const Signin = () => {
    return (
        <>
            <div className='section'>
                <div className='left-sec'>
                </div>
                <div className='right-sec'>
                    <div className="card">
                        <h1>Signin</h1>
                        <input className='input-box' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name' />
                        <input className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' />
                        <input className='input-box' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
                        <button onClick={collectData} className='submit-button' type='button'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin