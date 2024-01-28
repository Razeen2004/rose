import React from "react";
import "./SecondSection.css";
import { IoIosArrowRoundForward } from "react-icons/io";

import bottle from "./images/bottle.png";

const SecondSection = () => {
  return (
    <div className="section2">
      <div className="container">
        <div className="left">
          <div className="top">
            <span></span>
            <h2>Unlock the Elegance of Rosé</h2>
            <p>
              Embrace the allure of Rosé and elevate your moments to a whole new
              level of sophistication. Indulge in the exquisite taste of our
              carefully crafted Rosé, a wine that embodies elegance and captures
              the essence of fleeting, beautiful moments. Join the celebration
              and order your bottle of Rosé today. Experience the magic in every
              sip and toast to the extraordinary. Buy now and savor life's
              pleasures, one glass at a time.
            </p>
          </div>
          <div className="mid">
            <h2>Rosé Premium Gold</h2>
            <div className="showcase">
              <div className="showcase-top">
                <div className="showcase-items-left">
                  <h3>Type</h3>
                  <p>Rose</p>
                </div>
                <div className="showcase-items-mid">
                  <h3>Type</h3>
                  <p>Rose</p>
                </div>
                <div className="showcase-items-right">
                  <h3>Type</h3>
                  <p>Rose</p>
                </div>
              </div>
              <div className="showcase-bottom">
                <div className="showcase-items-left">
                  <h3>Type</h3>
                  <p>Rose</p>
                </div>
                <div className="showcase-items-mid">
                  <h3>Type</h3>
                  <p>Rose</p>
                </div>
                <div className="showcase-items-right">
                  <h3>Type</h3>
                  <p>Rose</p>
                </div>
              </div>
              <div className="field">
                <h3>Volume Left</h3>
                <span></span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <button>
              Add to Cart
              <IoIosArrowRoundForward />
            </button>
            <h2>$194.99</h2>
          </div>
        </div>
        <div className="right">
          <div className="cover-div">
            <img src={bottle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
// will complete this project in a month!!!
export default SecondSection;
