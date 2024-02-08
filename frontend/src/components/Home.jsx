import React from "react";
import FirstSection from "./Home/FirstSection";
import SecondSection from "./Home/SecondSection";
import ThirdSection from "./Home/ThirdSection";
import Slide from "./Home/Slide";
import Footer from "./Home/Footer";
const Home = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Slide />
      <Footer />
    </div>
  );
};

export default Home;
