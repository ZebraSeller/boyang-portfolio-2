import React from 'react';
import './home_skills.css';

import SkillIcon from "../general_comps/skill_icon";

import javaIcon from "../assets/skill-icons/java.png";
import cSharpIcon from "../assets/skill-icons/csharp.png";
import htmlIcon from "../assets/skill-icons/html5.png";
import cssIcon from "../assets/skill-icons/css.png";
import jsIcon from "../assets/skill-icons/js.png";
import reactIcon from "../assets/skill-icons/react.png";
import cppIcon from "../assets/skill-icons/cpp.png";
import pythonIcon from "../assets/skill-icons/python.png";
import nodeJSIcon from "../assets/skill-icons/nodejs.png";
import dotsIcon from "../assets/skill-icons/dots.png";

import unityIcon from "../assets/skill-icons/unity.png";
import vscodeIcon from "../assets/skill-icons/vscode.png";
import vscIcon from "../assets/skill-icons/vsc.png";
import androidStudioIcon from "../assets/skill-icons/androidstudio.png";
import rStudioIcon from "../assets/skill-icons/rstudio.png";
import eclipseIcon from "../assets/skill-icons/eclipse.png";
import githubIcon from "../assets/skill-icons/github.png";

function App() {
  return (
    <div id="home-skills-container"> 
      
      <div id="top-bar"/> <br/>
      <h1>My Skills</h1>
      <p>&#9733; = I feel quite proud and confident about it!</p>
      <div id="categories-box">
        <div className="skill-category">
          <h3 className="category-title">Programming Languages &amp; Libraries</h3>
          <SkillIcon image={htmlIcon} text="&#9733; HTML 5"/>
          <SkillIcon image={cssIcon} text="&#9733; CSS 3"/>
          <SkillIcon image={jsIcon} text="&#9733; JavaScript"/>
          <SkillIcon image={reactIcon} text="&#9733; React JS"/>
          <SkillIcon image={javaIcon} text="&#9733; Java"/>
          <SkillIcon image={cSharpIcon} text="&#9733; C#"/>
          <SkillIcon image={cppIcon} text="&#9733; C++"/>
          <SkillIcon image={pythonIcon} text="Python"/>
          <SkillIcon image={nodeJSIcon} text="Node.js"/>
          <SkillIcon image={dotsIcon} text="Still Learning More..." width="85px" noHoeverEffect={true}/>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Software Development Tools</h3>
          <SkillIcon image={unityIcon} text="&#9733; Unity"/>
          <SkillIcon image={vscodeIcon} text="&#9733; VS Code"/>
          <SkillIcon image={vscIcon} text="Visual Studio"/>
          <SkillIcon image={androidStudioIcon} text="Android Studio" fontSize="15px"/>
          <SkillIcon image={rStudioIcon} text="R Studio"/>
          <SkillIcon image={eclipseIcon} text="Eclipse IDE"/>
          <SkillIcon image={githubIcon} text="&#9733; GitHub"/>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Data Analysis &amp; Productivity</h3>
          <SkillIcon image={githubIcon} text="R"/>
          <SkillIcon image={githubIcon} text="MATLAB"/>
          <SkillIcon image={githubIcon} text="Excel"/>
          <SkillIcon image={githubIcon} text="Word"/>
          <SkillIcon image={githubIcon} text="PowePoint"/>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Digital Imaging &amp; Art</h3>
          <SkillIcon image={githubIcon} text="Illustrator"/>
          <SkillIcon image={githubIcon} text="&#9733; Photoshop"/>
          <SkillIcon image={githubIcon} text="Premiere Pro"/>
        </div>
        <div className="skill-category">
          <h3 className="category-title">3D Modeling &amp; Texturing</h3>
          <SkillIcon image={githubIcon} text="&#9733; 3DS Max"/>
          <SkillIcon image={githubIcon} text="&#9733; Blender"/>
          <SkillIcon image={githubIcon} text="&#9733; Photoshop"/>
          <SkillIcon image={githubIcon} text="Substance Painter" fontSize="12.5px"/>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Languages</h3>
          <SkillIcon image={githubIcon} text="&#9733; English"/>
          <SkillIcon image={githubIcon} text="&#9733; Mandarin"/>
        </div>
        <div className="skill-category">
          <h3 className="category-title">Miscellaneous</h3>
          <SkillIcon image={githubIcon} text="&#9733; PC Building"/>
          <SkillIcon image={githubIcon} text="Concept Design" fontSize="14.25px"/>
          <SkillIcon image={githubIcon} text="&#9733; UI Design"/>
          <SkillIcon image={githubIcon} text="Graphic Design" fontSize="14.25px"/>
          <SkillIcon image={githubIcon} text="Web Design" fontSize="14.25px"/>
          <SkillIcon image={githubIcon} text="Responsive Design" fontSize="12.25px"/>
        </div>
      </div>
    </div>
  );
}

export default App;