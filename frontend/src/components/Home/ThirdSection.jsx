import React from "react";
import "./ThirdSection.css";
import LogoBanner from "./images/LOGO BANNER.png";
const ThirdSection = () => {
  return (
    <div className="section3">
      <div className="container">
        <div className="left-sec">
          <img src={LogoBanner} alt="" />
        </div>
        <div className="right-sec">
          <span></span>
          <h2>Where Tradition Meets Excellence</h2>
          <p>
            Rosé is not just a wine, it's an experience that encapsulates the
            essence of life's fleeting and beautiful moments. Our vineyard,
            nestled in the heart of picturesque landscapes, embraces the
            artistry of wine making to create a Rosé that's as enchanting as a
            summer sunset. Each bottle tells a story of elegance, passion, and
            the delicate balance of flavors that dance on your palate, leaving
            you craving for more.
          </p>
          <h3>Elegance in Every Sip</h3>
          <p>
            Rosé embodies a sense of refinement and sophistication that elevates
            any occasion. Our wine is carefully crafted to capture the elegance
            of a classic Rosé, delivering a smooth and harmonious taste profile.
          </p>
          <h3>Fleeting Moments, Eternal Memories</h3>
          <p>
            Rosé celebrates the joy found in the fleeting moments of life.
            Whether it's a sunset gathering with friends or a quiet evening with
            a loved one, our Rosé enhances every experience and creates memories
            to last a lifetime.
          </p>
          <h3>Floral Aromas and Subtle Notes</h3>
          <p>
            Our Rosé boasts delicate floral aromas and subtle notes that are a
            true testament to the artistry of winemaking. The balanced flavors
            of fruits and flowers offer a refreshing and enjoyable tasting
            experience.
          </p>
          <h3>Crafted with Passion</h3>
          <p>
            Every bottle of Rosé is a product of our dedication and passion for
            winemaking. From the careful selection of grapes to the meticulous
            blending process, our team is committed to ensuring that each sip is
            an exceptional one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
