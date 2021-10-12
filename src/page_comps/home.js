import React from 'react';
import './home.css';

import boyang1 from '../assets/boyang-1.jpg';

function App() {
  return (
    <div className="home-container">
      <div className="home-box">
        <div style={{height:"4vw"}}></div>
        <p>Boyang's Site 2.0, This is a Work In Progress</p>
        <div style={{height:"6vw"}}></div>
        <h1>Greetings, I am Boyang Yu</h1>
        <img id="boyang-photo-1" src = {boyang1} width = "320px"/>
        <p className="intro-text">An Undergraduate Student Majoring in Material Science and Engineering 
          at University of Illinois at Urbana-Champaign</p>
        <p className="intro-text"> Software Developer | Amateur Artist | Designer</p>
        <p>Link to Old Website: </p>
        <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a>
        <div className="place-holder">Place Holder</div>
        
      </div>
    </div>
  );
}

export default App;
