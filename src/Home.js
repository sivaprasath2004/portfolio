import React,{useEffect,useState} from "react";
import Its_me from "./asset/ItsMe.png";
import Resume from "./asset/Resume.pdf";
import frontendMentor from "./asset/Front-end-mentor.png";
const Home = () => {
  const skills = ["Frontend Developer", "Web Designer", "Aspiring Full Stack Developer"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedSkill, setDisplayedSkill] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charCount < skills[currentSkillIndex].length) {
        // Increase charCount and append character to displayedSkill
        setDisplayedSkill(prevSkill => prevSkill + skills[currentSkillIndex][charCount]);
        setCharCount(prevCount => prevCount + 1);
      } else {
        if (displayedSkill.length > 0) {
          // Decrease charCount and remove last character from displayedSkill
          setDisplayedSkill(prevSkill => prevSkill.slice(0, -1));
          setCharCount(prevCount => prevCount - 1);
        } else {
          // Reset charCount and move to the next skill
          setCharCount(0);
          setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
        }
      }
    }, 500);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [charCount, currentSkillIndex, skills]);
console.log(displayedSkill)
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
