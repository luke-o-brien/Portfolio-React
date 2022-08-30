import React from "react";
import pacmanimg from "../Images/smartmockups_l7dhz28w.png"

function Pacman() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={pacmanimg}></img>
      </div>
      <div className="right-side">
        <h5>Pacman Game</h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
        </div>
        <p>My first sizable coding project. Built using HTML, CSS and JavaScript, this is a grid-based Pacman game which allows users to control Pacman 
      using keyboard inputs to collect pellets and capture ghosts when they are vulnerable. The game includes a leaderboard created using local storage as 
      well as a theme and map size selector, which is chosen by the user before the game begins.</p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://luke-o-brien.github.io/Pacman-Game/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Pacman-Game" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </ div>
  )
}

export default Pacman