import React from "react";

const expMap = { Experienced: 90, Intermediate: 70, intermediate: 70, Basic: 45 };

const frontendSkills = [
  { name: "HTML5", exp: "Experienced" },
  { name: "CSS3", exp: "Experienced" },
  { name: "JavaScript", exp: "Intermediate" },
  { name: "React JS", exp: "Experienced" },
  { name: "React Native", exp: "Basic" },
  { name: "Tailwind CSS", exp: "Intermediate" },
];

const backendSkills = [
  { name: "Node JS", exp: "Intermediate" },
  { name: "Express JS", exp: "Intermediate" },
  { name: "MongoDB", exp: "Basic" },
  { name: "Git & GitHub", exp: "Intermediate" },
  { name: "REST APIs", exp: "Intermediate" },
];

const SkillCard = ({ title, icon, skills }) => (
  <div className="skill-card">
    <div className="skill-card-header">
      <div className="skill-card-icon">{icon}</div>
      <h3 className="skill-card-title">{title}</h3>
    </div>
    <div className="skill-items">
      {skills.map((s, i) => (
        <div className="skill-item" key={i}>
          <div className="skill-item-top">
            <span className="skill-name">
              <span style={{ fontSize: "1rem" }}>▸</span> {s.name}
            </span>
            <span className="skill-exp">{s.exp}</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-bar-fill"
              style={{
                width: `${expMap[s.exp] || 50}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skill = () => (
  <div className="skill-section-inner">
    <div style={{ textAlign: "center" }}>
      <p className="section-eyebrow">Explore My</p>
      <h2 className="section-title">Technical <span className="grad-text">Skills</span></h2>
      <p className="section-subtitle">
        A self-taught developer continually expanding across the full web development stack.
      </p>
    </div>
    <div className="skill-grid">
      <SkillCard title="Frontend Development" icon="🎨" skills={frontendSkills} />
      <SkillCard title="Backend Development" icon="⚙️" skills={backendSkills} />
    </div>
  </div>
);

export default Skill;
