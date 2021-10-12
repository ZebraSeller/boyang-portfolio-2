import React from 'react';
import ReactDOM from 'react-dom';
import './nav_bar_button.css';

function App({
  onClick=null,
  text="Button",
  turnOffRightBorder = true,
}) {
  let borderRightStyle = {
    display: "block"
  };
  if(turnOffRightBorder) {
    borderRightStyle = {
      display: "none"
    };
  }
	return (
				<div onClick={onClick} className="nav-bar-button">
          <div className="border-left"></div>
          <span className="nav-bar-button-text">{text}</span>
          <div className="border-right" style={borderRightStyle}></div>
        </div>
  );
}

export default App; 