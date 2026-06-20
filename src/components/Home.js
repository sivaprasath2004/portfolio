import React, { useState, useEffect } from "react";
import Resume from "../asset/Resume.pdf";
import ItsMe from "../asset/ItsMe.png";

const ROLES = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Frontend Developer",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      const current = ROLES[roleIdx];
      if (!deleting) {
        if (charIdx < current.length) {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (charIdx > 0) {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return (
    <div className="home-role-wrap">
      <span className="home-role">
        <span>{text}</span>
        <span className="cursor-blink" />
      </span>
    </div>
  );
};

const Home = () => (
  <div className="home-grid">
    <div className="home-text">
      <span className="home-greeting">&#47;&#47; Hello, World!</span>
      <h1 className="home-name">
        I'm <span className="grad-text">Sivaprasath</span>
      </h1>
      <Typewriter />
      <p className="home-desc">
        A passionate self-taught developer dedicated to crafting beautiful,
        user-friendly web experiences. I build full-stack applications and am
        always learning something new.
      </p>
      <div className="home-stats">
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2.5K+</span>
          <span className="stat-label">FEM Points</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years Learning</span>
        </div>
      </div>
      <div className="home-actions">
        <button className="btn-primary" onClick={() => window.open(Resume)}>
          ↓ Resume
        </button>
        <a href="#contact" className="btn-ghost">
          Get in Touch
        </a>
      </div>
      <div className="home-socials">
        <a
          href="https://www.linkedin.com/in/sivaprasath2004/"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/sivaprasath2004"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/sivaprasath2004"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          title="Frontend Mentor"
        >
          <img
            id="frontend_mentor_icon"
            src={require("../asset/Front-end-mentor.png")}
            alt="frontend mentor"
          />
        </a>
      </div>
    </div>

    <div className="home-image-wrap">
      <div className="profile-blob-wrap">
        <div className="profile-blob-bg" />
        <div className="profile-blob-border">
          <div className="profile-blob-inner">
            <img
              src={ItsMe}
              alt="Sivaprasath"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
