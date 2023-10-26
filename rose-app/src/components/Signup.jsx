import React from 'react'
import './Signup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const collectData = async () => {
    const url = 'http://localhost:8000/register';
    console.warn(name, email, password)
    let result = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.log(result)
    localStorage.setItem("userStorage", JSON.stringify(result))
    navigate('/')
  }

  return (
    <>
      <div className='section'>
        <div className='left-sec'>
        </div>
        <div className='right-sec'>
          <div className="card">
            <h1>Register</h1>
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

export default Signup