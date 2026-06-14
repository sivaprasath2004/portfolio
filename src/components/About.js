import React from "react";

const About = () => (
  <div style={{ width: "100%", maxWidth: 1100, display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem" }}>
    <div style={{ textAlign: "center" }}>
      <p className="section-eyebrow">Get to know more</p>
      <h2 className="section-title">About <span className="grad-text">Me</span></h2>
    </div>

    <div className="about-grid">
      <div className="about-image-wrap">
        <img
          style={{backgroundColor:'rgb(10, 10, 15)',position:'relative',zIndex:2}}
          className="about-img"
          src="https://github.com/sivaprasath2004/portfolio/blob/main/src/asset/ItsMe.png?raw=true"
          alt="Sivaprasath"
          onError={e => { e.target.src = "https://via.placeholder.com/340x425/7c5cfc/ffffff?text=SP"; }}
        />
        <div className="about-img-accent" />
      </div>

      <div className="about-content">
        <div>
          <h3 className="section-title" style={{ textAlign: "left", fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: "0.5rem" }}>
            Aspiring Full Stack Developer
          </h3>
        </div>

        <p className="about-bio">
          Proficient in front-end development, I'm deeply passionate about transitioning into a full-stack
          developer through self-learning. I'm a dedicated learner committed to crafting user-friendly websites.
          With real-world full-stack projects under my belt, I continuously enhance my skills through daily research
          and learning. I strive to achieve{" "}
          <a href="https://www.frontendmentor.io/profile/sivaprasath2004" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>{" "}
          solutions and have attained multiple weekly and monthly badges.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <span className="about-card-icon">🎓</span>
            <span className="about-card-value">BSc</span>
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
          <a href="https://github.com/sivaprasath2004" className="about-social-link" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="github" />
            GitHub Profile
          </a>
          <a href="https://www.frontendmentor.io/profile/sivaprasath2004" className="about-social-link" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          <a href="https://www.linkedin.com/in/sivaprasath2004/" className="about-social-link" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
