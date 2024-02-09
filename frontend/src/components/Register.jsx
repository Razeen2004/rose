import React, { useState } from "react";
import Rose from "./Home/images/LOGO BANNER.png";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onHandleClick = (e) => {
    e.preventDefault();
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