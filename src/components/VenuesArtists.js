import React from "react";
import venuesArtistsimg from "../Images/smartmockups_l7dij97u.png"

function VenuesArtistsProject() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={venuesArtistsimg}></img>
      </div>
      <div className="right-side">
        <h5>Venues and Artists app </h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
          <i className="devicon-react-original colored smallicon"></i>
          <i className="devicon-tailwindcss-plain colored smallicon"></i>
          <i className="devicon-python-plain colored smallicon"></i>
          <i className="devicon-postgresql-plain colored smallicon"></i>
          <i className="devicon-flask-original colored smallicon"></i>
          <i className="devicon-jira-plain-wordmark colored smallicon"></i>
        </div>
        <p>For this two week pair project we created a full stack web application which allowed both music venues and artists to view the details of the 
        other in order to find acts to perform or venues which were looking for new talent. The back-end of the project was built using Python and Flask 
        and the front-end using react with the styling being done in tailwind CSS with some plain css. As well as the listings of artists we also created a 
        multipage sign in form following the typeform format using conditional rendering. 
        </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a id="mfs-modal" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/luke-o-brien/Transport-for-London-App" rel="noreferrer" target="_blank">Github Respository</a></button>
        </div>
      </div>
    </div>
  )
}

export default VenuesArtistsProject