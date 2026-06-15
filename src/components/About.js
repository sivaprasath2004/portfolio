import React from "react";
import ItsMe from "../asset/ItsMe.png";

const About = () => (
  <div
    style={{
      width: "100%",
      maxWidth: 1100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3rem",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <p className="section-eyebrow">Get to know more</p>
      <h2 className="section-title">
        About <span className="grad-text">Me</span>
      </h2>
    </div>

    <div className="about-grid">
      <div className="about-image-wrap">
        <img
          className="about-img"
          src={ItsMe}
          alt="Sivaprasath"
        />
        <div className="about-img-accent" />
      </div>

      <div className="about-content">
        <div>
          <h3
            className="section-title"
            style={{
              textAlign: "left",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              marginBottom: "0.5rem",
            }}
          >
            MERN Stack Developer
          </h3>
        </div>

        <p className="about-bio">
          A passionate self-taught developer proficient in front-end and full-stack
          development, currently working as a Software Developer at Dynmatrix Global Solution.
          I build performant, user-friendly web and mobile applications using the MERN stack.
          I continuously sharpen my skills through real-world projects, open-source contributions,
          and{" "}
          <a
            href="https://www.frontendmentor.io/profile/sivaprasath2004"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>{" "}
          challenges — earning multiple weekly and monthly recognition badges.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <span className="about-card-icon">🎓</span>
            <span className="about-card-value">MSc</span>
            <span className="about-card-label">Computer Science</span>
          </div>
          <div className="about-card">
            <span className="about-card-icon">💻</span>
            <span className="about-card-value">50+</span>
            <span className="about-card-label">Repositories</span>
          </div>
          <div className="about-card">
            <span className="about-card-icon">🏅</span>
            <span className="about-card-value">2,500+</span>
            <span className="about-card-label">FEM Points</span>
          </div>
        </div>

        <div className="about-socials">
          <a
            href="https://github.com/sivaprasath2004"
            className="about-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="github"
            />
            GitHub Profile
          </a>
          <a
            href="https://www.frontendmentor.io/profile/sivaprasath2004"
            className="about-social-link"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          <a
            href="https://www.linkedin.com/in/sivaprasath2004/"
            className="about-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
              alt="linkedin"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
