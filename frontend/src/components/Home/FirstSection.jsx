import React from "react";
import Navbar from "../Navbar";
import "./FirstSection.css";
const FirstSection = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="center-div">
        <div className="h2">
            <div className="top"><p>ROSÉ — ELEVATED</p></div>
            <div className="bottom"><span>Since '92</span> <p>MOMENTS ——</p></div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
