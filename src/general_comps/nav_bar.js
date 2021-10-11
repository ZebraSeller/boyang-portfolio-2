import React from 'react';
import ReactDOM from 'react-dom';
import Nav_Bar_Button from './nav_bar_button';
import './nav_bar.css';
import ZBIcon from '../assets/zb_logo_thick_white.png';

function App() {
	React.useEffect(() => {//run on load.
    //hideNavBar();
  }, []);

	//make nav bar auto hide into a square icon on top left after scroll down.
	return (
    <div id="nav-bar-container">
			<img src={ZBIcon} alt="LOGO.png" id="zb-icon"/>
			<div className="button-container" id="button-container">
				<Nav_Bar_Button text="About Me"/>
				<Nav_Bar_Button text="Skills"/>
				<Nav_Bar_Button text="Portfolio"/>
				<Nav_Bar_Button text="Resume"/>
				<Nav_Bar_Button text="Contact Me"/>
				<div style={borderStyle}></div>
				<div onClick={() => hideNavBar()} id="hide-button">&#10094;</div>
				<div style={borderStyle}></div>
			</div>
			<div id="bottom-bar"></div>
			{/* <p>    </p>
			<button>Extende/Hide nav_bar</button> */}
    </div>
  );
}
export default App;

let navBarHidden = false;
function hideNavBar() {
	if (navBarHidden == false) {
		document.getElementById("button-container").style.transform ="translateX(-95.1%)";
		document.getElementById("zb-icon").style.paddingRight="0.5vw";
		document.getElementById("nav-bar-container").style.backgroundColor="hsla(30, 5%, 15%,0)";
		document.getElementById("bottom-bar").style.transform ="translateX(-46%) scaleX(8.25%)";
		document.getElementById("hide-button").innerHTML = "&#10095";
		navBarHidden = true;
	} else {
		document.getElementById("button-container").style.transform ="";
		document.getElementById("zb-icon").style.paddingRight="10%";
		document.getElementById("nav-bar-container").style.backgroundColor="hsla(30, 5%, 15%,1)";
		document.getElementById("bottom-bar").style.transform ="";
		document.getElementById("hide-button").innerHTML = "&#10094";
		navBarHidden = false;
	}
}


let borderStyle = {
	float: "right",
	position: "relative",
	backgroundColor: "hsl(45, 75%, 50%)",
	width: "1px",
	height: "80%",
	top: "10%",
	transitionDuration:"5s"
}