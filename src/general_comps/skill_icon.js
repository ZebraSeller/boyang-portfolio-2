import React from 'react';
import ReactDOM from 'react-dom';
import './skill_icon.css';

function App({
image = null,
alt = "skill icon",
width = "95px",
text = "skill",
noHoeverEffect = false,
fontSize = "16px"
}) {

  if (noHoeverEffect) return (
    <div className="skill-icon-container-no-hover">
      <img src={image} alt={alt} width={width}/>
      <p className="skill-icon-text" style={{fontSize: fontSize}}>{text}</p>
    </div>
  );
	return (
		<div className="skill-icon-container">
      <img src={image} alt={alt} width={width}/>
      <p className="skill-icon-text" style={{fontSize: fontSize}}>{text}</p>
    </div>
  );
}

export default App; 