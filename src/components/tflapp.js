import React from "react";
import tflimg from "../Images/smartmockups_l7diceae.png"
function TFLProject() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={tflimg}></img>
      </div>
      <div className="right-side">
        <h5>London Transport Site </h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
          <i className="devicon-react-original colored smallicon"></i>
        </div>
        <p>A mobile-first multipage React app which utilises the TFL Unified API and allows users to view service updates, 
          search for live departures and plan journeys. The app was built as a personal side project to help 
          improve my react and front-end development skills. This is version one, and I am currently working on adding extra features
          such as advanced journey search, google maps integration and user accounts to provide a more personalised experience.</p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://london-transport.netlify.app/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Transport-for-London-App" rel="noreferrer" target="_blank">Github Respository</a></button>
        </div>
      </div>
    </div>
  )
}

export default TFLProject