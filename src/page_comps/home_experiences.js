import React from 'react';
import './home_experiences.css';
function App() {
  return (
    <div id="home-experiences-container">
      <div id="top-bar"/> <br/>
      <h1 className="experiences-header1">My Experiences</h1>
      <div className="experience-container">
        <h2 className="experience-title">Web Development Intership at Shoptaki</h2>
        <h2 className="experience-time">June-August 2021</h2>
        <p className="experience-list">• Worked on web apps, designed UI and implemented web pages with HTML, and React JS.</p>
        <p className="experience-list">• Collaborated with team members to create new components and pages for websites.</p>
        <p className="experience-list">• Page Demo: <a href="https://www.artstation.com/artwork/9mYyZy" className="links">https://www.artstation.com/artwork/9mYyZy</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Personal Portfolio Website Project 2.0 ( This website right here! :-) )</h2>
        <h2 className="experience-time">September-November 2021</h2>
        <p className="experience-list">• Created a personal demo portfolio/info website that act as an interactive resume.</p>
        <p className="experience-list">• Used HTML, CSS, JavaScript, and React to create visual elements that improve user interaction.</p>
        <p className="experience-list">• The React App was deployed to and hosted on Github Pages.</p>
        <p className="experience-list">• WIP 2.0 website URL: <a href="https://zebraseller.github.io/boyang-portfolio-2/" className="links">https://zebraseller.github.io/boyang-portfolio-2/</a></p>
        <p className="experience-list">• Discontinued old website (1.0) URL: <a href="https://zebraseller.github.io/Boyang-Portfolio-Site-Project/" className="links">https://zebraseller.github.io/Boyang-Portfolio-Site-Project/</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Unity Games Development</h2>
        <h2 className="experience-time">2020-2021</h2>
        <p className="experience-list">• Created several mini games using C# and Unity Engine.</p>
        <p className="experience-list">• Created most of the 3D and visual assets using Photoshop and 3DS Max.</p>
        <p className="experience-list">• Demo of Humvee Simulator: <a href="https://www.artstation.com/artwork/ZGqlN1" className="links">https://www.artstation.com/artwork/ZGqlN1</a></p>
        <p className="experience-list">• Asset created for Saturn Rocket Project: <a href="https://www.artstation.com/artwork/28WExg" className="links">https://www.artstation.com/artwork/28WExg</a></p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">3D Modeling &amp; Texturing</h2>
        <h2 className="experience-time">2017-2021</h2>
        <p className="experience-list">• Created 3D models and respective UV mapped textures</p>
        <p className="experience-list">• Modelled organic and non-organic objects, terrains, etc.</p>
        <p className="experience-list">• ArtStation Album of 3D Modeling Portfolio: <a href="https://zebraseller.artstation.com/albums/2056553" className="links">https://zebraseller.artstation.com/albums/2056553</a></p>
      </div>
    </div>
  );
}

export default App;