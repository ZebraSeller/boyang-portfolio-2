import React from 'react';
import './home.css';


function App() {
  return (
    <div className="contact-me-container">
      <div className="home-box">
        <div style={{height:"8vh"}}></div>
        <p>Boyang's Site 2.0, This is a Work In Progress</p>
        <div style={{height:"6vw"}}></div>
        <h1 style={{color:"white"}}>My Phone Number is: 123-456-7890</h1>
        {/* <img id="boyang-photo-1" src = {boyang1} width = "320px"/>
        <p className="intro-text">An Undergraduate Student Majoring in Material Science and Engineering 
          at University of Illinois at Urbana-Champaign</p>
        <p className="intro-text"> Software Developer | Amateur Artist | Designer</p> */}
        <p>Link to Old Website: </p>
        <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a>
        <div className="place-holder">...Place Holder...</div>
        
      </div>
    </div>
  );
}

export default App;