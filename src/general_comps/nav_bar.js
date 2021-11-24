import React from 'react';
import ReactDOM from 'react-dom';
import NavBarButton from './nav_bar_button';
import {Link, useLocation} from 'react-router-dom';

import './nav_bar.css';
import ZBIcon from '../assets/zb_logo_thick_white.png';
function App() {
	const URL = useLocation(); //the object URL will have properties pathname, hash etc.
	React.useEffect(() => {//will run on load.
		if (URL.hash === ''){//if at default URL, scroll to Top.
			window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
			if (navBarHidden && window.innerHeight < window.innerWidth) hideNavBar();
			if (!navBarHidden && window.innerHeight > window.innerWidth) hideNavBar();
		} else { //else scroll to hash
      setTimeout(() => {
        const hash = URL.hash.replace('#', '');
        const element = document.getElementById(hash);
        if (element != null) element.scrollIntoView({behavior: 'smooth'});
				if (URL.pathname == "/boyang-portfolio-2/") hideNavBar(); //restrict auto-hide-navBar to only on the home page, FOR NOW.
      }, 0);
    }
  }, [URL.hash, URL.pathnamek, URL.key]); //if URL.hash or pathname changes, useEffect() will activate.
	document.addEventListener('scroll',function() {
    if(window.pageYOffset > window.innerHeight && !navBarHidden && !(window.innerHeight > window.innerWidth)) hideNavBar();
		if(window.pageYOffset == 0 && navBarHidden && !(window.innerHeight > window.innerWidth)) hideNavBar();
  });
	//make nav bar auto hide into a square icon on top left after scroll down. 

	return (
    <div id="nav-bar-container">
			<Link to="/boyang-portfolio-2/" id="top-icon-link">
				<img src={ZBIcon} alt="LOGO.png" id="zb-icon"/>
			</Link>
			<div className="button-container" id="button-container">
				<NavBarButton text="About Me" linkToPage="/boyang-portfolio-2/#home-aboout-me-container"/>
				<NavBarButton text="Experiences" linkToPage="/boyang-portfolio-2/#home-experiences-container"/>
				<NavBarButton text="Skills" linkToPage="/boyang-portfolio-2/#home-skills-container"/>
				<NavBarButton text="Portfolio" onClick={() => {UnderConstructionAlert();}} linkToPage="/boyang-portfolio-2/portfolio"/>
				<NavBarButton text="Resume" linkToPage="/boyang-portfolio-2/resume"/>
				<NavBarButton text="Contact Me" linkToPage="/boyang-portfolio-2/#footer-container"/>
				{/* <NavBarButton text="Contact Me" linkToPage="/boyang-portfolio-2/contact_me"/> */}
				{/* <NavBarButton text="Misc." onClick={() => {UnderConstructionAlert();}}/> */}
				<div className="hide-button-border" style={borderStyle}></div>
				<div onClick={() => hideNavBar()} id="hide-button">&#10094;</div>
				<div className="hide-button-border" style={borderStyle}></div>
			</div>
			<div id="bottom-bar"></div>
    </div>
  );
}
export default App;

let navBarHidden = false;
function hideNavBar() {
	if (window.innerHeight > window.innerWidth) {//case: screen orientation portrait
		if (navBarHidden === false) {
			document.getElementById("nav-bar-container").style.transform ="translateY(-56vh)";
			document.getElementById("zb-icon").style.paddingRight="0.5vw";
			document.getElementById("zb-icon").style.transform ="translateY(-36vh)";
			// document.getElementById("bottom-bar").style.transform ="translateY(-56vh)";
			document.getElementById("hide-button").innerHTML = "&#10095";
			document.getElementById("hide-button").style.transform ="translateX(-50%) rotateZ(90deg)";
			
			
			// setTimeout(function() 
			// 	{document.getElementById("nav-bar-container").style.backgroundColor="hsla(30, 5%, 15%,0)";}, 100);
			navBarHidden = true;
		} else {
			document.getElementById("nav-bar-container").style.transform ="";
			document.getElementById("zb-icon").style.paddingRight="0.5vw";
			document.getElementById("zb-icon").style.transform ="";
			
			document.getElementById("hide-button").innerHTML = "&#10094";
			document.getElementById("nav-bar-container").style.zIndex = 2;
			navBarHidden = false;
		}
	} else {//case: screen orientation landscape
		if (navBarHidden === false) {
			let buttonContainerLength = -document.getElementById("button-container").clientWidth + document.getElementById("hide-button").clientWidth + 2;
			let bottomBarScale = (document.getElementById("zb-icon").clientWidth + document.getElementById("hide-button").clientWidth + 2) / document.getElementById("bottom-bar").clientWidth * 100;
			let bottomBartranslateX = document.getElementById("bottom-bar").clientWidth - (document.getElementById("bottom-bar").clientWidth * bottomBarScale / 100)
			document.getElementById("button-container").style.transform ="translateX("+ buttonContainerLength + "px)";
			document.getElementById("zb-icon").style.paddingRight="0.5vw";
			document.getElementById("nav-bar-container").style.backgroundColor="hsla(30, 5%, 15%,0)";
			document.getElementById("bottom-bar").style.transform ="translateX("+ (-bottomBartranslateX) / 2  + "px) scaleX("+ bottomBarScale + "%)";
			document.getElementById("hide-button").innerHTML = "&#10095";
			navBarHidden = true;
		} else {
			document.getElementById("button-container").style.transform ="";
			document.getElementById("nav-bar-container").style.backgroundColor="hsla(30, 5%, 15%,1)";
			document.getElementById("bottom-bar").style.transform ="";
			document.getElementById("hide-button").innerHTML = "&#10094";
			navBarHidden = false;
		}
	}
	
}

function UnderConstructionAlert() {
	alert("This page is still under construction");
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