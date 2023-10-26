import React, { useEffect } from 'react'
import Navbar from './Navbar'
import './Section1.css'
import gsap from 'gsap';

// IMPORTING IMAGES
import Award from '../img/award.png';
import Guaranteed from '../img/Guaranteed.png';
import Bottle from '../img/bottle.png';


const Section1 = ({ scrollToSection }) => {
  // gsap.registerPlugin(); // Make sure GSAP is properly initialized

  useEffect(() => {
    
      gsap.from(".sec2", {
        delay: 0.5,
        duration: 1,
        right: '-150%'
      });

      gsap.from(".sec3", {
        delay: 0.5,
        duration: 1,
        left: '-150%'
      });

      gsap.from(".sec1", {
        delay: 0.5,
        duration: 1,
        right: '-150%'
      });

      gsap.from(".section-left", {
        delay: 0.25,
        duration: 1,
        right: '50%'
      });

      gsap.from(".section-right", {
        delay: 0.25,
        duration: 1,
        left: '50%'
      });

      gsap.from(".img1", {
        delay: 0.1,
        duration: 1,
        top: '30rem',
        left: '30%',
        rotate: '27deg',
        opacity: 0
      });

      gsap.from(".img2", {
        delay: 0.1,
        duration: 1,
        rotate: '-26deg',
        top: '30.5rem',
        opacity: 0
      });
    
  }, []); // Empty dependency array to run once on component mount

















  // }, []);





  return (
    <div className='section1'>
      <Navbar scrollToSection={scrollToSection} />


      {/* MAIN HEADING */}
      <div className='headingSec'>
        <div className='container'>
          <div className='sec1'>
            <h2>★★★</h2>
          </div>
          <div className='sec2'>
            <h2>ROSÉ — ELEVATED</h2>
          </div>
          <div className='sec3'>
            <div>
              <button>Since '92</button>
              <h2>MOMENTS ——</h2>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTLES */}

      <div className='bottleSec'>
        <div className='container'>
          <img className='img1' src={Bottle} alt='bottle' />
          <img className='img2' src={Bottle} alt='bottle' />
        </div>
      </div>





      {/* MID SECTION OF TEXTS */}
      <div className='mid-section'>
        <div className='section-content'>
          <div className='section-left'>
            <div className='award'>
              <img src={Award} alt='award' />
              <div className='awardContent'>
                <h2>AWARD WINNING</h2>
                <p>Wine of the year</p>
              </div>
            </div>
            <div className='guarantee'>
              <img src={Guaranteed} alt='guaranteed' />
              <div className='guaranteedContent'>
                <h2>Brought to you by</h2>
                <p>Mr. Alexander Graham Bell Co.</p>
              </div>
            </div>
          </div>
          <div className='section-right'>
            <p>At our core, we are dedicated to the pursuit of excellence in the world of whiskies and spirits.
              Our mission is to meticulously seek out the exceptional,
              the extraordinary—those rare few casks that have birthed the ultimate in both whiskies and spirits.</p>
          </div>
        </div>
      </div>

      <div className='heading'>
        <span>ROSé -</span>
        <span>ROSé -</span>
        <span>ROSé -</span>
        <span>ROSé -</span>
        <span>ROSé -</span>
        <span>ROSé -</span>
      </div>
    </div>
  )
}

export default Section1