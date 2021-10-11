import React from 'react';
import ReactDOM from 'react-dom';
import Nav_Bar_Button from './nav_bar_button';
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
				<Nav_Bar_Button text="About Me"/>
				<Nav_Bar_Button text="Skills"/>
				<Nav_Bar_Button text="Portfolio"/>
				<Nav_Bar_Button text="Resume"/>
				<Nav_Bar_Button text="Contact Me" turnOffRightBorder={false}/>
			</div>
			{/* <p>    </p>
			<button>Extende/Hide nav_bar</button> */}
    </div>
  );
}

export default App; 