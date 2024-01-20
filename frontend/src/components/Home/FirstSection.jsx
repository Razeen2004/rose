import React from "react";
import Navbar from "../Navbar";
import "./FirstSection.css";

import award from "./images/award.png";
import guaranteed from "./images/Guaranteed.png";
import bottle from "./images/bottle.png";

const FirstSection = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="main-div">
        <div className="center-div">
          <div className="h2">
            <div className="stars">★★★</div>
            <div className="top">
              <p>ROSÉ — ELEVATED</p>
            </div>
            <div className="bottom">
              <span>Since '92</span> <p>MOMENTS ——</p>
            </div>
          </div>
        </div>
        <div className="bottle-div">
            <img className="bottle1" src={bottle} alt="" />
            <img className="bottle2" src={bottle} alt="" />
        </div>
        <div className="bottom-div">
          <div className="left">
            <div className="top">
              <div className="left">
                <img src={award} alt="" />
              </div>
              <div className="right">
                <h2>AWARD WINNING</h2> <p>Wine of the year</p>
              </div>
            </div>
            <div className="bottom">
              <img src={guaranteed} alt="" />
              <div className="right">
                <h2>brought to you by</h2> <p>Mr. Alexander Graham Bell Co.</p>
              </div>
            </div>
          </div>
          <div className="right">
            <p>
              At our core, we are dedicated to the pursuit of excellence in the
              world of whiskies and spirits. Our mission is to meticulously seek
              out the exceptional, the extraordinary—those rare few casks that
              have birthed the ultimate in both whiskies and spirits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
