import React from 'react';
import ReactDOM from 'react-dom';
import './nav_bar.css';
import ZBIcon from '../assets/zb_logo_thick_white.png';

function App() {
	//make nav bar auto hide into a square icon on top left after scroll down.
	return (
    <div className = "nav-bar">
			<div className="icon-container">
				<img src={ZBIcon} alt="LOGO.png" className="zb-icon"/>
			</div>
			<div className="button-container">
				<button onClick="">About Me</button>
				<button onClick="">Skills</button>
				<button onClick="">Portfolio</button>
				<button onClick="">Resume</button>
				<button onClick="" id="right-most-button">Contact Me</button>
			</div>
			{/* <p>    </p>
			<button>Extende/Hide nav_bar</button> */}
    </div>
  );
}

export default App; 