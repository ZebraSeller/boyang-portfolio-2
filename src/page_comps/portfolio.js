import React from 'react';

import './portfolio.css'

import emailIcon from '../assets/email_icon.png';
import phoneIcon from '../assets/phone_icon.png';
import linkedInIcon from '../assets/linkedin_icon.png';
import artStationIcon from '../assets/artstation_icon.png';
import gitHubIcon from '../assets/github_icon.png';

function App() {
  return(
    <div id="portfolio-container">
      <div style={{height:"8vh"}} className="place-holder"></div>
      <h1 className="portfolio-header1">Portfolio</h1>
      <div id="portfolio-items-container">
        <div className="contact-item">
          <img className="contact-icon portfolio-image" src={linkedInIcon} alt="contact-icon.png"/>
          <a className="portfolio-links" href="https://www.linkedin.com/in/boyangyu/">Boyang Yu | LinkedIn</a>
        </div>
        <div className="contact-item">
          <img className="contact-icon portfolio-image" src={artStationIcon} alt="contact-icon.png"/>
          <a className="portfolio-links" href="https://zebraseller.artstation.com/albums/2056553">Boyang Yu | ArtStation</a>
        </div> <br/><br/>
        <div className="contact-item">
          <img className="contact-icon portfolio-image" src={gitHubIcon} alt="contact-icon.png"/>
          <a className="portfolio-links" href=" https://github.com/ZebraSeller">Boyang Yu | GitHub</a>
        </div>
      </div>
      <div style={{height:"8vh"}} className="place-holder"></div>
    </div>
  );
}

export default App;