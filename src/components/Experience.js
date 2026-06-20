import React, { useState } from "react";

const experiences = [
  {
    id: "dynmatrix",
    role: "Full Stack Software Engineer",
    company: "Dynmatrix Global Solution Pvt Ltd",
    product: "PixsOffice — Studio Photography Software & CRM",
    period: "Aug 2024 – Present",
    type: "Full-time",
    logo: require("../asset/Dynmatrix.png"),
    orgUrl: "https://www.linkedin.com/company/dynmatrix",
    highlights: [
      {
        icon: "🖼️",
        title: "High-Performance Desktop Upload Engine",
        desc: "Designed and developed an Electron.js desktop upload engine for large-scale studio photo uploads, enabling photographers to efficiently process over 10,000 high-resolution images per session.",
      },
      {
        icon: "⚡",
        title: "Real-time RAW-to-JPEG Pipeline",
        desc: "Built a real-time RAW-to-JPEG conversion and compression pipeline that reduced file sizes by 60–70% while preserving visual quality, significantly lowering upload times and storage costs.",
      },
      {
        icon: "🤖",
        title: "AI-Powered Face Recognition",
        desc: "Improved AI-powered face recognition accuracy by automatically detecting, matching, and grouping guest photos based on registered face profiles, reducing manual sorting effort by 80%.",
      },
    ],
    stack: ["Electron.js", "Node.js", "React.js", "MongoDB", "AI/ML APIs"],
  },
];

const ExperienceCard = ({ exp }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="exp-card">
      <div className="exp-card-header">
        <div className="exp-org-wrap">
          <a
            href={exp.orgUrl}
            target="_blank"
            rel="noreferrer"
            className="exp-org-logo-link"
            title={exp.company}
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="exp-org-logo"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="exp-org-logo-fallback" style={{ display: "none" }}>
              <span>D</span>
            </div>
          </a>
          <div className="exp-meta">
            <div className="exp-role-row">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-type-badge">{exp.type}</span>
            </div>
            <a
              href={exp.orgUrl}
              target="_blank"
              rel="noreferrer"
              className="exp-company"
            >
              {exp.company}
            </a>
            <p className="exp-product">{exp.product}</p>
            <span className="exp-period">{exp.period}</span>
          </div>
        </div>
        <button
          className="exp-toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-label="Toggle details"
        >
          {expanded ? "▲" : "▼"}
        </button>
      </div>

      {expanded && (
        <div className="exp-details">
          <div className="exp-highlights">
            {exp.highlights.map((h, i) => (
              <div className="exp-highlight" key={i}>
                <span className="exp-highlight-icon">{h.icon}</span>
                <div>
                  <p className="exp-highlight-title">{h.title}</p>
                  <p className="exp-highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="exp-stack">
            {exp.stack.map((t, i) => (
              <span key={i} className="project-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = () => (
  <div className="exp-section-inner">
    <div style={{ textAlign: "center" }}>
      <p className="section-eyebrow">Professional Journey</p>
      <h2 className="section-title">
        Work <span className="grad-text">Experience</span>
      </h2>
      <p className="section-subtitle">
        Building real-world software products that solve meaningful problems.
      </p>
    </div>
    <div className="exp-list">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </div>
  </div>
);

export default Experience;
