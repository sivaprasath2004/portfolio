import React from "react";
import data from "./data";

const Project = () => {
  return (
    <>
      <p>Expore My</p>
      <h1>Projects</h1>
      <div className="project">
        <div className="project1" id="PROJECT">
          <img src={data.project1[0].url} alt={data.project3[2].alt} />
          <h1> Announcement Announcer</h1>
          <p>
            Innovative information sharing <span>Android application.</span>
          </p>
        </div>
        <div className="project2"></div>
        <div className="project3"></div>
      </div>
    </>
  );
};

export default Project;
