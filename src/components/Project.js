import React, { useState } from "react";
import data from "../data";

const projects = [
  {
    key: "project1",
    name: "Zodia",
    desc: "A social media platform empowering users to connect, chat, and communicate with like-minded individuals effortlessly.",
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    badge: "Full Stack",
    github: "https://github.com/sivaprasath2004/social-media-application",
    demo: null,
    images: data.project1,
  },
  {
    key: "project2",
    name: "Announcement Announcer",
    desc: "An innovative Android application for sharing information and delivering updates directly to your email address.",
    tags: ["React Native", "Node JS", "Express JS", "MongoDB"],
    badge: "Mobile",
    github: "https://github.com/sivaprasath2004/announcement-annocer-application-",
    demo: null,
    images: data.project2,
  },
  {
    key: "project3",
    name: "E-Commerce Site",
    desc: "A full-featured e-commerce platform with Add to Cart integration and simplified test purchasing for optimal UX.",
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    badge: "Full Stack",
    github: "https://github.com/sivaprasath2004/shopping-application",
    demo: "https://shopping-application-iota.vercel.app/",
    images: data.project3,
  },
  {
    key: "project4",
    name: "Tic Tac Toe",
    desc: "Play live matches with friends and engage in real-time chat on this interactive multiplayer web platform.",
    tags: ["Pug", "JavaScript", "Node JS", "Socket.io"],
    badge: "Realtime",
    github: "https://github.com/sivaprasath2004/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-7bj5.onrender.com",
    images: data.project4,
  },
  {
    key: "project5",
    name: "Code Craft",
    desc: "Generate QR codes and explore the art of scanning them, adding a touch of modern technology in this Android app.",
    tags: ["React Native", "JavaScript"],
    badge: "Mobile",
    github: "https://github.com/sivaprasath2004/shopping-application",
    demo: null,
    images: data.project5,
  },
  {
    key: "project6",
    name: "News Application",
    desc: "Experience the latest headlines at your fingertips. Stay informed with country-specific news and a wide range of categories.",
    tags: ["React JS", "CSS", "News API"],
    badge: "Web App",
    github: "https://github.com/sivaprasath2004/News-application",
    demo: "https://main--delightful-treacle-903788.netlify.app/",
    images: data.project6,
  },
];

const ProjectCard = ({ project }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img
          src={project.images[activeImg]?.url}
          alt={project.images[activeImg]?.alt || project.name}
        />
        <span className="project-badge">{project.badge}</span>
        <div className="project-thumbnails">
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`project-thumb ${activeImg === i ? "active" : ""}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={img.url} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((t, i) => (
            <span key={i} className="project-tag">{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
            ↗ GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn filled">
              ▶ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = () => (
  <div className="projects-inner">
    <div style={{ textAlign: "center" }}>
      <p className="section-eyebrow">Explore My</p>
      <h2 className="section-title">Featured <span className="grad-text">Projects</span></h2>
      <p className="section-subtitle">
        A collection of full-stack, mobile, and web applications built with modern technologies.
      </p>
    </div>
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard key={p.key} project={p} />
      ))}
    </div>
  </div>
);

export default Project;
