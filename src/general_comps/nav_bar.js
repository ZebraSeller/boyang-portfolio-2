import React from 'react';
import ReactDOM from 'react-dom';
import './nav_bar.css';

function App() {
	//make nav bar auto hide into a square icon on top left after scroll down.
	return (
    <div className = "nav-bar">
			<img src=" " alt="LOGO.png"/>
			<button>Home</button>
			<button>About Me</button>
			<button>Skills</button>
			<button>Links</button>
			<button>Portfolio</button>
			<button>Resume</button>
			<button>Contact Me</button>
			<p>    </p>
			<button>Extende/Hide nav_bar</button>
    </div>
  );
}

export default App;