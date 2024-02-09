import React from "react";
import Rose from "./Home/images/LOGO BANNER.png";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="left">
        <img src={Rose} alt="" />
      </div>
      <div className="right">
        <div className="signup">
          <h1>Signup</h1>
          <label htmlFor="firstname">Enter First Name</label>
          <input type="text" name="firstname" placeholder="John" />

          <label htmlFor="lastname">Enter Last Name</label>
          <input type="text" name="lastname" placeholder="Wick" />

          <label htmlFor="username">Enter Username</label>
          <input type="text" name="username" placeholder="Enter your Email" />

          <label htmlFor="password">Enter Password</label>
          <input type="password" name="password" placeholder="*************" />
          <button>Signup</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
