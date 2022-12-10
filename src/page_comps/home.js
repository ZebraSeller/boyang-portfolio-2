import React from 'react';
import AboutMe from './home_about_me';
import Skills from './home_skills';
import Experiences from './home_experiences';

import './home.css';

import boyang1 from '../assets/boyang-1.jpg';
import boyang4 from '../assets/boyang-4.png';
import boyang6 from '../assets/boyang-6.jpg';
import bg0 from "../assets/bg0.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";

function App() {
  document.addEventListener('scroll',function() {
    var yLoc = window.pageYOffset;
    if(yLoc <= window.innerHeight && document.getElementById("home-box") != null) {
        homeScrollUp(yLoc);
    }
  });
  
  function homeScrollUp(yOffset) {
    var opacityFraction = (525 - yOffset) / 450;
  
    var bgs = document.getElementsByClassName("background-image");
    document.getElementById("home-box").style.opacity = opacityFraction;

    if (window.innerHeight > window.innerWidth) {//case: screen orientation portrait
      document.getElementById("home-box").style.transform = "translateY(" + (yOffset / 5) + "px)";
      var scaleFraction = yOffset / 10;
    } else {
      document.getElementById("home-box").style.transform = "translateY(" + (yOffset / 1.15) + "px)";
      var scaleFraction = yOffset / 5;
    }
    bgs[1].style.transform = "translateY("+ (1 + scaleFraction) + "px)";
    bgs[2].style.transform = "translateY("+ (1 + 0.5 * scaleFraction) + "px)";
    bgs[3].style.transform = "translateY("+ (1 + 2 * scaleFraction)  + "px)";
  }

  return (
    <div className="home-container">
      <img className="background-image" src={bg0} alt="bg0"/>
      <img className="background-image" src={bg1} alt="bg1"/>
      <img id="bg2" className="background-image" src={bg2} alt="bg2"/>
      <img className="background-image" src={bg3} alt="bg3"/>
      <div id="home-box">
        <div style={{height:"8vh"}} className="place-holder"></div>
        <p className="top-notes">Boyang's Site 2.0, This is a Work In Progress. Best viewed in landscape mode on PC.</p>
        <p className="top-notes">Link to Old Website: <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/" className="links">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a></p>
        <div style={{height:"12vh"}} className="place-holder"></div>
        <h1 id="greetings">Greetings, I am Boyang Yu</h1>
        <img id="boyang-photo-1" src = {boyang6} width = "360px"/>
        <p className="intro-text">Material Science and Engineering Major
          &amp; Computer Science Minor<br/>
          @ University of Illinois at Urbana-Champaign</p>
        <p className="intro-text"> Software Developer | Web Developer | Amateur Artist | Designer</p>
        
        {/* <div className="place-holder">...This Page (& the rest of the website) is still Under Construction...</div> */}
      </div>
      <AboutMe />
      <Experiences />
      <Skills />
    </div>
  );
}

export default App;
