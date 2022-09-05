import React from "react";
import fishwatchimg from "../Images/smartmockups_l7dhwbjm.png"

function Fishwatch() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={fishwatchimg}></img>
      </div>
      <div className="right-side">
        <h5>Fishwatch API Site</h5>
        <div className="technologies-used">
          <i className="devicon-javascript-plain colored smallicon"></i>
          <i className="devicon-react-original colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-bulma-plain colored smallicon"></i>
        </div>
        <p>A multipage front-end React web app which utilises the Fishwatch and Edamam API. This site takes information from the Fishwatch API 
        and displays information about different species; it also uses the Edamam API to show recipes for more sustainable fish choices. This was a pair project, 
        my work focused on the fish of the day component, which displayed a different fish to the user each day, making use of local storage. I also created the page which utilised the 
        Edamam API  </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://fishwatch.netlify.app" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Project-2" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </div>
  )
}

export default Fishwatch