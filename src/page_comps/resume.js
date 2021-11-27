import React from 'react';

import './resume.css';

import resumePDF from '../assets/Boyang-Yu-Resume-2021-11-25.pdf';

function App() {
  return(
    <div id="resume-container">
      <div id="place-holder" style={{height:"8vh"}}/>
      <h1 className="resume-header1">My Resume</h1>
      <iframe src={resumePDF} id="resume-viewer"/>
      <h3 id="error-message">
        <h2>!</h2><br/>
        An Error Occured, Or This Media Type May Not Be Supported on Your Browser.<br/><br/>
        Please Try Download the PDF File Using the Link Below Instead.
        <br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
      </h3> <br/>
      <a id="pdf-download-link" className="links" href={resumePDF} download>Download the Resume in PDF Format</a>
      <div id="place-holder" style={{height:"2vh"}}/>
    </div>
  );
}

export default App;