import React from "react";
import "./Login.css"
import Rose from "./Home/images/LOGO BANNER.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <img src={Rose} alt="" />
      </div>
      <div className="right">
        <div className="signin">
          <h1>Login</h1>

          <label htmlFor="username">Enter Username</label>
          <input type="text" name="username" placeholder="Enter your Email" />

          <label htmlFor="password">Enter Password</label>
          <input type="password" name="password" placeholder="*************" />
          <button>Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
