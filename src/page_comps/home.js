import React from 'react';
import AboutMe from './home_about_me';

import './home.css';

import boyang1 from '../assets/boyang-1.jpg';
import background from '../assets/360_F_294992494_kPG2PgIe6Jn9sU4OcSw6Th6SvZD4OfWy.jpg';

function App() {
  document.addEventListener('scroll',function() {
    var yLoc = window.pageYOffset;
    if(yLoc <= window.innerHeight) {
        homeScrollUp(yLoc);
    }
  });
  
  function homeScrollUp(yOffset) {
    var opacityFraction = (525 - yOffset) / 450;
    var scaleFraction = 1 + yOffset / 5000;
    
    document.getElementById("background-image").style.transform = "scale("+ scaleFraction + "," + scaleFraction + ")";
    document.getElementById("home-box").style.opacity = opacityFraction;

    if (window.innerHeight > window.innerWidth) {//case: screen orientation portrait
      document.getElementById("home-box").style.transform = "translateY(" + (yOffset / 5) + "px)";
    } else {
      document.getElementById("home-box").style.transform = "translateY(" + (yOffset / 1.15) + "px)";
    }
  }

  return (
    <div className="home-container">
      <img id="background-image" src={background} alt="bg"/>
      <div id="home-box">
        <div style={{height:"8vh"}} className="place-holder"></div>
        <p>Boyang's Site 2.0, This is a Work In Progress</p>
        <div style={{height:"12vh"}} className="place-holder"></div>
        <h1 id="greetings">Greetings, I am Boyang Yu</h1>
        <img id="boyang-photo-1" src = {boyang1} width = "320px"/>
        <p className="intro-text">Material Science and Engineering Major
          &amp; Minoring in Computer Science <br/>
          @ University of Illinois at Urbana-Champaign</p>
        <p className="intro-text"> Software Developer | Web Developer | Amateur Artist | Designer</p>
        <p>Link to Old Website: </p>
        <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a>
        {/* <div className="place-holder">...This Page (& the rest of the website) is still Under Construction...</div> */}
      </div>
      <AboutMe />

    </div>
  );
}

export default App;
