import React,{useEffect,useState} from "react";
import Its_me from "./asset/ItsMe.png";
import Resume from "./asset/Resume.pdf";
import frontendMentor from "./asset/Front-end-mentor.png"; 
const Home = () => {
  const skills = ["Frontend Developer", "Web Designer", "Aspiring Full Stack Developer"];


  return (
    <>
      <div id="profile_image">
        <img src={Its_me} alt="sivaprasath2004" />
      </div>
      <div id="profile_detail">
        <div className="details">
          <h1>Hello I`m</h1>
          <h2>Sivaprasath</h2>
          <h3>Frontend Developer</h3>
          <div className="profile_buttons">
            <button onClick={()=>window.open(Resume)} className="btn downloadbtn">Resume</button>
            <a href="#contact">
            <button className="btn contactbtn">Contact Info</button></a>
          </div>
          <div className="profile_buttons">
            <a href="https://www.linkedin.com/in/sivaprasath2004/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
                alt="linkdin"
              />
            </a>
            <a href="https://github.com/sivaprasath2004">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="github"
              />
            </a>
            <a href="https://www.frontendmentor.io/profile/sivaprasath2004">
              <img id="frontend_mentor"
                src={frontendMentor}
                alt="frontend mentor"
              />
            </a>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Home;