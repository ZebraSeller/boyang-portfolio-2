import React from 'react';
import './home.css';

import boyang1 from '../assets/boyang-1.jpg';

function App() {
  return (
    <div className="home-container">
      <div style={{height:"4vw"}}></div>
      <p>Boyang's Site 2.0 Work In Progress</p>
      <img src = {boyang1} width = "250px"/>
      <h1>Greetings.</h1>
      <p>I am Boyang Yu, a software developer, designer, amateur artist, and student.</p>
      <p>Link to Old Website: </p>
      <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a>
      <div className="place-holder"></div>
      <h1>Bottom Text</h1>

    </div>
  );
}

export default App;
