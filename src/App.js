import React from "react";
import BookingProject from "./components/bookingproject.js";
import VenuesArtistsProject from "./components/VenuesArtists.js";
import MyFoundSounds from "./components/myfoundsounds.js";
import Fishwatch from "./components/fishwatch.js";
import Pacman from "./components/pacman.js";
// image imports
import lukeimage from "./Images/P1000496.jpeg"

function App() {
  
  const [projecttype, setprojecttype] = React.useState("")


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
          <li className="push-left"><a href="#">Luke O'Brien</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
      {/* H E R O   S E C T I O N */}
      <header className="header">
        <div className="title-container">
          <h1>Luke O'Brien</h1>
          <h4>Software Engineering Portfolio </h4>
          <div className="logo-container">
            <a className="link-icon" href="https://github.com/luke-o-brien" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
            <a className="link-icon" href="https://www.linkedin.com/in/l-obrien/" target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
          </div>
        </div>
      </header>
      {/* A B O U T   M E */}
      <section className="about" id="about">
        <div className="about-me-container">
          <div className="image">
            <img className="luke-photo" src={lukeimage}></img>
          </div>
          <div className="blurb">
            <h3>Hi,</h3>
            <h3>I'm Luke</h3>
            <p className="bio">When looking for a change in career I identified the aspect of my previous roles which I enjoyed most 
            and this was problem solving. This coupled with my interest in languages led me to try coding. I quickly found that I 
            loved creating things and solving problems using code. I enrolled In General Assembly's Software Engineering Immersive 
            course to deepen my understanding and develop my skills. I am now looking for my first role in the industry to allow me 
            to apply and build on what I have already learnt.</p>
          </div>
        </div>
      </section>
      <section className="skill-section" id="skills">
        <h2>Skills</h2>
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
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        {/* P O R T F O L I O */}
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <div className="toggle-buttons">
            <button  onClick={toggleclick} value="current" className="toggle-button">Currently working on </button>
            <button  onClick={toggleclick} value="generalassembly" className="toggle-button">General Assembly Projects</button>
            <button  onClick={toggleclick} value="past" className="toggle-button">Past Side Projects</button>
          </div>
          { projecttype === "" ? null : <>
            { 
              projecttype === "current" ?
                <BookingProject /> : null
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
                <p>check back soon</p>
              </> : null }
      
            
        
          </> 
          }
        </div>
      </section>
      <footer>
        <a className="link-icon-footer" href="https://github.com/luke-o-brien" target="_blank"><i className="fa-brands fa-github fa-2x links"></i></a>
        <a className="link-icon-footer" href="https://www.linkedin.com/in/l-obrien/" target="_blank"><i className="fa-brands fa-linkedin fa-2x links"></i></a>
        <p>lukeobrien02@gmail.com</p>
      </footer>
    </div>
  )
} 

export default App
