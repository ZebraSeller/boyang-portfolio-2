import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

function App() {
	//make nav bar auto hide into a square icon on top left after scroll down.
	return (
    <div className="footer-container">
			<h2 className="footer-header">Let's Get In Touch!</h2>
      <a className="footer-text" href="mailto:yuligent.ycg@gmail.com">yuligent.ycg@gmail.com</a><br/>
      <a className="footer-text" href="mailto:boyangy4@illinois.edu">boyangy4@illinois.edu</a><br/><br/><br/>
      <p className="footer-text">&#169; 2021 Boyang Yu</p>
    </div>
  );
}

export default App; 