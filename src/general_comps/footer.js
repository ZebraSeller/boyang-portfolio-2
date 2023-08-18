import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

import emailIcon from '../assets/email_icon.png';
import phoneIcon from '../assets/phone_icon.png';
import linkedInIcon from '../assets/linkedin_icon.png';
import artStationIcon from '../assets/artstation_icon.png';
import gitHubIcon from '../assets/github_icon.png';

function App() {
	//make nav bar auto hide into a square icon on top left after scroll down.
	return (
    <div id="footer-container">
			<h2 className="footer-header">Let's Get In Touch!</h2>
      <div id="contact-info-container">
        <div className="contact-item">
          <img className="contact-icon" src={emailIcon} alt="email-icon.png"/>
          <a className="footer-link" href="mailto:yuligent.ycg@gmail.com" onClick={() => {copyToClipBoard("yuligent.ycg@gmail.com");}}>yuligent.ycg@gmail.com</a>
        </div>
        <div className="contact-item">
          <img className="contact-icon" src={emailIcon} alt="email-icon.png"/>
          <a className="footer-link" href="mailto:yuboyang@usc.edu" onClick={() => {copyToClipBoard("yuboyang@usc.edu");}}>yuboyang@usc.edu</a>
        </div> <br/><br/>
        <div className="contact-item">
          <img className="contact-icon" src={linkedInIcon} alt="contact-icon.png"/>
          <a className="footer-link" href="https://www.linkedin.com/in/boyangyu/">Boyang Yu | LinkedIn</a>
        </div>
        <div className="contact-item">
          <img className="contact-icon" src={artStationIcon} alt="contact-icon.png"/>
          <a className="footer-link" href="https://zebraseller.artstation.com/albums/2056553">Boyang Yu | ArtStation</a>
        </div> <br/><br/>
        <div className="contact-item">
          <img className="contact-icon" src={gitHubIcon} alt="contact-icon.png"/>
          <a className="footer-link" href=" https://github.com/ZebraSeller">Boyang Yu | GitHub</a>
        </div>
        <div className="contact-item">
          <img className="contact-icon" src={phoneIcon} alt="contact-icon.png"/>
          <p className="footer-link" onClick={() => {copyToClipBoard("(+1) 510-598-7828");}}>(+1) 510-598-7828 </p>
        </div> <br/><br/>
      </div>
      <p className="footer-text">&#169; 2023 Boyang Yu</p>
    </div>
  );
}
export default App; 

function copyToClipBoard(text) {
  navigator.clipboard.writeText(text);
  alert(text + " has been copied to your clipboard.");
}