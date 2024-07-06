import React,{useEffect,useState} from "react";
import Its_me from "./asset/ItsMe.png";
import Resume from "./asset/Resume.pdf";
import frontendMentor from "./asset/Front-end-mentor.png"; 
const Typewriter = ({ data }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Index of the current word
  const [charIndex, setCharIndex] = useState(0); // Index of the current character
  const [typingForward, setTypingForward] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < data.length && index >= 0) {
        const word = data[index];
        if (typingForward) {
          // Typing forward
          if (charIndex < word.length) {
            setText(prevText => prevText + word[charIndex]);
            setCharIndex(prevIndex => prevIndex + 1);
          } else {
            // Switch to erasing backward
            setTypingForward(false);
          }
        } else {
          // Erasing backward
          if (charIndex > 0) {
            setText(prevText => prevText.slice(0, -1));
            setCharIndex(prevIndex => prevIndex - 1);
          } else {
            // Move to the previous word
            setIndex(prevIndex => prevIndex + 1);
            setCharIndex(0);
            setTypingForward(true); // Switch back to typing forward for the next word
          }
        }
      } else {
        // End condition: Reset everything once all words are typed and erased
        setIndex(0);
        setCharIndex(0);
        setText('');
        setTypingForward(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, data, index, typingForward]);

  return (
    <>
      <h3>{text}</h3>
    </>
  );
}
const Home = () => {
  const data = ["Frontend Developer", "Mern Stack Developer", "Aspiring Full Stack Developer"];


  return (
    <>
      <div id="profile_image">
        <img src={Its_me} alt="sivaprasath2004" />
      </div>
      <div id="profile_detail">
        <div className="details">
          <h1>Hello I`m</h1>
          <h2>Sivaprasath</h2>
          <div id="text_change_container">
          <Typewriter data={data} />
          </div>
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
