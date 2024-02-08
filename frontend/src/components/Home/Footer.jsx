import React from "react";
import "./Footer.css";

import Facebook from './images/Facebook.png';
import Linkedin from './images/Linkedin.png';
import Twitter from './images/TwitterX.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h2>Rosé</h2>
      </div>
      <div className="mid">
        <h3>All Rights Reserved</h3>
      </div>
      <div className="right">
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
        <img src={Linkedin} alt="" />
      </div>
    </div>
  );
};

export default Footer;
