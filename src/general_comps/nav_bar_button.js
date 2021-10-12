import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './nav_bar_button.css';

function App({
  onClick=null,
  text="Button",
  turnOffRightBorder = true,
  linkToPage = null,
}) {
  let borderRightStyle = {
    display: "block"
  };
  if(turnOffRightBorder) {
    borderRightStyle = {
      display: "none"
    };
  }

  if (linkToPage != null) {
    return (
      
        <div onClick={onClick} className="nav-bar-button">
          <Link to={linkToPage} className="button-link">
          <div className="border-left"></div>
          <span className="nav-bar-button-text">{text}</span>
          <div className="border-right" style={borderRightStyle}></div>
          </Link>
        </div>
      
    );
  } else
	return (
				<div onClick={onClick} className="nav-bar-button">
          <div className="border-left"></div>
          <span className="nav-bar-button-text">{text}</span>
          <div className="border-right" style={borderRightStyle}></div>
        </div>
  );
}

export default App; 