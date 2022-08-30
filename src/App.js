import React from "react";
import TFLProject from "./components/tflapp.js";
import VenuesArtistsProject from "./components/VenuesArtists.js";
import MyFoundSounds from "./components/myfoundsounds.js";
import Fishwatch from "./components/fishwatch.js";
import Pacman from "./components/pacman.js";
// image imports
// import lukeimage from "./Images/P1000496.jpeg"
import BookingProject from "./components/bookingproject.js";

function App() {
  
  const [projecttype, setprojecttype] = React.useState("current")


  function toggleclick(e){
    console.log(e.target.value)
    setprojecttype(e.target.value)
    console.log(projecttype)
  }

  return ( 
    <div>
      {/* N A V B A R */}
      <nav>
        <ul>
          <li className="push-left"><a href="#">{"Luke O'Brien"}</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Experience</a></li>
          <li><a href="#skills">contact</a></li>
        </ul>
      </nav>
      {/* H E R O   S E C T I O N */}
      <header className="header">
        <div className="title-container">
          <h1>{"Luke O'Brien"}</h1>
          <h4>Software Engineering Portfolio </h4>
          <div className="logo-container">
            <a className="link-icon" href="https://github.com/luke-o-brien"  rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
            <a className="link-icon" href="https://www.linkedin.com/in/l-obrien/"  rel="noreferrer"target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
          </div>
        </div>
      </header>
      {/* A B O U T   M E */}
      <section className="about" id="about">
        <div className="about-me-container">
          <div className="blurb">
            <h3>Hi,</h3>
            <h3>{"I'm Luke"}</h3>
            <p className="bio">{` When looking for a change in career I identified the aspect of my previous roles which I enjoyed most 
            and this was problem solving. This coupled with my interest in languages led me to try coding. I quickly found that I 
            loved creating things and solving problems using code. I enrolled In General Assembly's Software Engineering Immersive 
            course to deepen my understanding and develop my skills. I am now looking for my first role in the industry to allow me 
            to apply and build on what I have already learnt.`}</p>
          </div>
          <div className="skills-container">
            <h5 className="skilltitle">My skills</h5>
            <div className="skills">
              <div className="icon-container"><i className="devicon-html5-plain colored bigicon"></i><p>HTML</p></div>
              <div className="icon-container"><i className="devicon-css3-plain colored bigicon"></i><p>CSS</p></div>
              <div className="icon-container"><i className="devicon-javascript-plain colored bigicon"></i><p>JavaScript</p></div>
              <div className="icon-container"><i className="devicon-react-original colored bigicon"></i><p>React</p></div>
              <div className="icon-container"><i className="devicon-nodejs-plain colored bigicon"></i><p>Node JS</p></div>
              <div className="icon-container"><i className="devicon-mongodb-plain colored bigicon"></i><p>Mongo Db</p></div>
              <div className="icon-container"><i className="devicon-express-original colored bigicon"></i><p>Express</p></div>
              <div className="icon-container"><i className="devicon-flask-original colored bigicon"></i><p>Flask</p></div>
              <div className="icon-container"><i className="devicon-python-plain colored bigicon"></i><p>Python</p></div>
              <div className="icon-container"><i className="devicon-jira-plain colored bigicon"></i><p>Jira</p></div>
              <div className="icon-container"><i className="devicon-sass-original colored bigicon"></i><p>Sass</p></div>
              <div className="icon-container"><i className="devicon-git-plain colored bigicon"></i><p>Git</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        {/* P O R T F O L I O */}
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <div className="toggle-buttons">
            <button  onClick={toggleclick} value="current" className={ projecttype === "current" ? "active" : "toggle-button"}>{"What I'm working on"}</button>
            <button  onClick={toggleclick} value="generalassembly" className={ projecttype === "generalassembly" ? "active" : "toggle-button"}>General Assembly Projects</button>
            <button  onClick={toggleclick} value="past" className={ projecttype === "past" ? "active" : "toggle-button"}>Past Projects</button>
          </div>
          { projecttype === "" ? <h3>Click above to view projects</h3> : <>
            { 
              projecttype === "current" ?
                <BookingProject />  : null
            }
            { 
              projecttype === "generalassembly" ? <>
                <VenuesArtistsProject />
                <MyFoundSounds />
                <Fishwatch />
                <Pacman />
              </> : null 
            }
            {
              projecttype === "past" ? <>
                <TFLProject />
              </> : null }
      
            
        
          </> 
          }
        </div>
      </section>
      <footer>
        <p className="email">lukeobrien02@gmail.com</p>
        <div className="linksconta">
        <a className="link-icon-footer" href="https://github.com/luke-o-brien" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
        <a className="link-icon-footer" href="https://www.linkedin.com/in/l-obrien/"  rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
        </div>
      </footer>
    </div>
  )
} 

export default App
