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
import SQLIcon from "../assets/skill-icons/sql.png";
import dotsIcon from "../assets/skill-icons/dots.png";
import unityIcon from "../assets/skill-icons/unity.png";
import vscodeIcon from "../assets/skill-icons/vscode.png";
import vscIcon from "../assets/skill-icons/vsc.png";
import androidStudioIcon from "../assets/skill-icons/androidstudio.png";
import rStudioIcon from "../assets/skill-icons/rstudio.png";
import eclipseIcon from "../assets/skill-icons/eclipse.png";
import githubIcon from "../assets/skill-icons/github.png";
import rIcon from "../assets/skill-icons/r.png";
import matlabIcon from "../assets/skill-icons/matlab.png";
import excelIcon from "../assets/skill-icons/excel.png";
import wordIcon from "../assets/skill-icons/word.png";
import powerpointIcon from "../assets/skill-icons/powerpoint.png";
import photoshopIcon from "../assets/skill-icons/photoshop.png";
import illustratorIcon from "../assets/skill-icons/illustrator.png";
import premiereIcon from "../assets/skill-icons/premiere.png";
import dsMaxIcon from "../assets/skill-icons/3dsmax.png";
import blenderIcon from "../assets/skill-icons/blender.png";
import substancePainterIcon from "../assets/skill-icons/substancepainter.png";
import englishIcon from "../assets/skill-icons/english.png";
import chineseIcon from "../assets/skill-icons/chinese.png";
import pcBuildingIcon from "../assets/skill-icons/pcbuilding.png";
import conceptDesignIcon from "../assets/skill-icons/conceptdesign.png";
import uiDesignIcon from "../assets/skill-icons/uidesign.png";
import graphicDesignIcon from "../assets/skill-icons/graphicdesign.png";
import webDesignIcon from "../assets/skill-icons/webdesign.png";

function App() {
  return (
    <div id="home-skills-container"> 
      
      <div id="top-bar"/> <br/>
      <h1>My Skills</h1>
      <p style={{color:"hsl(45, 50%, 50%)"}}>&#9733; = I feel quite proud and confident about it!</p>
      <div id="categories-box">
        <div className="skill-category">
          <h2 className="category-title">Programming Languages &amp; Libraries</h2>
          <SkillIcon image={htmlIcon} text="&#9733; HTML 5"/>
          <SkillIcon image={cssIcon} text="&#9733; CSS 3"/>
          <SkillIcon image={jsIcon} text="&#9733; JavaScript"/>
          <SkillIcon image={reactIcon} text="&#9733; React JS"/>
          <SkillIcon image={javaIcon} text="&#9733; Java"/>
          <SkillIcon image={cSharpIcon} text="&#9733; C#"/>
          <SkillIcon image={cppIcon} text="&#9733; C++"/>
          <SkillIcon image={pythonIcon} text="Python"/>
          <SkillIcon image={nodeJSIcon} text="Node.js"/>
          <SkillIcon image={SQLIcon} text="SQL"/>
          <SkillIcon image={dotsIcon} text="Still Learning More..." width="85px" noHoeverEffect={true}/>
        </div>
        <div className="skill-category">
          <h2 className="category-title">Software Development Tools</h2>
          <SkillIcon image={unityIcon} text="&#9733; Unity"/>
          <SkillIcon image={vscodeIcon} text="&#9733; VS Code"/>
          <SkillIcon image={vscIcon} text="Visual Studio"/>
          <SkillIcon image={androidStudioIcon} text="Android Studio" fontSize="15px"/>
          <SkillIcon image={rStudioIcon} text="R Studio"/>
          <SkillIcon image={eclipseIcon} text="Eclipse IDE"/>
          <SkillIcon image={githubIcon} text="&#9733; GitHub"/>
        </div>
        <div className="skill-category">
          <h2 className="category-title">Data Analysis &amp; Productivity</h2>
          <SkillIcon image={rIcon} text="R"/>
          <SkillIcon image={matlabIcon} text="MATLAB"/>
          <SkillIcon image={excelIcon} text="Excel"/>
          <SkillIcon image={wordIcon} text="Word"/>
          <SkillIcon image={powerpointIcon} text="PowePoint"/>
        </div>
        <div className="skill-category">
          <h2 className="category-title">Digital Imaging &amp; Art</h2>
          <SkillIcon image={illustratorIcon} text="Illustrator"/>
          <SkillIcon image={photoshopIcon} text="&#9733; Photoshop"/>
          <SkillIcon image={premiereIcon} text="Premiere Pro"/>
        </div>
        <div className="skill-category">
          <h2 className="category-title">3D Modeling &amp; Texturing</h2>
          <SkillIcon image={dsMaxIcon} text="&#9733; 3DS Max"/>
          <SkillIcon image={blenderIcon} text="&#9733; Blender"/>
          <SkillIcon image={photoshopIcon} text="&#9733; Photoshop"/>
          <SkillIcon image={substancePainterIcon} text="Substance Painter" fontSize="12.5px"/>
        </div>
        <div className="skill-category">
          <h2 className="category-title">Languages</h2>
          <SkillIcon image={englishIcon} text="&#9733; English"/>
          <SkillIcon image={chineseIcon} text="&#9733; Mandarin"/>
        </div>
        <div className="skill-category">
          <h2 className="category-title">Miscellaneous</h2>
          <SkillIcon image={pcBuildingIcon} text="&#9733; PC Building"/>
          <SkillIcon image={conceptDesignIcon} text="Concept Design" fontSize="14.25px"/>
          <SkillIcon image={uiDesignIcon} text="UI Design"/>
          <SkillIcon image={graphicDesignIcon} text="Graphic Design" fontSize="14.25px"/>
          <SkillIcon image={webDesignIcon} text="Web Design" fontSize="14.25px"/>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default App;