import React, { useState } from "react";
import Rose from "./Home/images/LOGO BANNER.png";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onHandleClick = (e) => {
    e.preventDefault();

    let data = JSON.stringify({ firstname: firstname, lastname: lastname, username: username, password: password });

    axios.post("http://localhost:8000/api/auth/register",
      data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
    <div className="register">
      <div className="left">
        <img src={Rose} alt="" />
      </div>
      <div className="right">
        <div className="signup">
          <h1>Signup</h1>
          <label htmlFor="firstname">Enter First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="John"
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <label htmlFor="lastname">Enter Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Wick"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <label htmlFor="username">Enter Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Email"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            placeholder="*************"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={onHandleClick}>Signup</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
