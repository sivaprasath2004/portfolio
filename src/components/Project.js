import React, { useState, useEffect, useCallback } from "react";
import data from "../data";

const { projects } = data;

/* ─── Markdown-lite renderer (bold, code, table, list, heading) ─── */
const renderReadme = (md) => {
  const lines = md.split("\n");
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.trimStart().startsWith("```")) {
      const lang = line.replace(/```/, "").trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      out.push(
        <div key={i} className="rm-code-block">
          {lang && <span className="rm-code-lang">{lang}</span>}
          <pre>
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && lines[i + 1] && lines[i + 1].includes("---")) {
      const headers = line.split("|").filter((c) => c.trim());
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").filter((c) => c.trim()));
        i++;
      }
      out.push(
        <div key={i} className="rm-table-wrap">
          <table className="rm-table">
            <thead>
              <tr>
                {headers.map((h, j) => <th key={j}>{h.trim()}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => <td key={k}>{cell.trim()}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // H1
    if (line.startsWith("# ")) {
      out.push(<h1 key={i} className="rm-h1">{line.slice(2)}</h1>);
      i++; continue;
    }
    // H2
    if (line.startsWith("## ")) {
      out.push(<h2 key={i} className="rm-h2">{line.slice(3)}</h2>);
      i++; continue;
    }
    // H3
    if (line.startsWith("### ")) {
      out.push(<h3 key={i} className="rm-h3">{line.slice(4)}</h3>);
      i++; continue;
    }
    // List
    if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      out.push(
        <ul key={i} className="rm-list">
          {items.map((it, j) => <li key={j}>{inlineFormat(it)}</li>)}
        </ul>
      );
      continue;
    }
    // Blank line
    if (!line.trim()) { i++; continue; }

    // Paragraph
    out.push(<p key={i} className="rm-p">{inlineFormat(line)}</p>);
    i++;
  }
  return out;
};

const inlineFormat = (text) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("`") && p.endsWith("`"))
      return <code key={i} className="rm-inline-code">{p.slice(1, -1)}</code>;
    if (p.startsWith("**") && p.endsWith("**"))
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    return p;
  });
};

/* ─── File Tree ─── */
const FileIcon = ({ type, name }) => {
  if (type === "dir") return <span className="ft-icon ft-dir">📁</span>;
  const ext = name.split(".").pop().toLowerCase();
  const icons = {
    js: "🟨", jsx: "🟦", ts: "🔷", tsx: "🔷",
    json: "📋", md: "📝", env: "🔒", gitignore: "🚫",
    css: "🎨", html: "🌐", pug: "🌿", py: "🐍",
  };
  return <span className="ft-icon ft-file">{icons[ext] || "📄"}</span>;
};

const FileTree = ({ nodes, depth = 0, github }) => {
  const [open, setOpen] = useState(
    depth === 0 ? nodes.map((_, i) => i) : []
  );

  const toggle = (i) =>
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <ul className="ft-list" style={{ paddingLeft: depth === 0 ? 0 : 20 }}>
      {nodes.map((node, i) => (
        <li key={i} className="ft-item">
          {node.type === "dir" ? (
            <>
              <button
                className="ft-row ft-row-dir"
                onClick={() => toggle(i)}
              >
                <span className="ft-chevron">
                  {open.includes(i) ? "▾" : "▸"}
                </span>
                <FileIcon type="dir" name={node.name} />
                <span className="ft-name">{node.name}</span>
              </button>
              {open.includes(i) && node.children?.length > 0 && (
                <FileTree
                  nodes={node.children}
                  depth={depth + 1}
                  github={github}
                />
              )}
            </>
          ) : (
            <a
              className="ft-row ft-row-file"
              href={`${github}/blob/main/${node.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="ft-spacer" />
              <FileIcon type="file" name={node.name} />
              <span className="ft-name">{node.name}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

/* ─── Project Drawer ─── */
const ProjectDrawer = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState("overview");

  // Lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleKey = useCallback(
    (e) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const tabs = ["overview", "code", "readme"];

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="project-drawer">
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-header-left">
            <span className="project-badge" style={{ position: "static" }}>
              {project.badge}
            </span>
            <div>
              <h2 className="drawer-title">{project.name}</h2>
              <p className="drawer-tagline">{project.tagline}</p>
            </div>
          </div>
          <div className="drawer-header-right">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="drawer-gh-btn"
              title="Open on GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <button className="drawer-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="drawer-stats">
          <span className="drawer-stat">
            <span className="drawer-stat-dot" style={{ background: project.languageColor }} />
            {project.language}
          </span>
          <span className="drawer-stat">⭐ {project.stars}</span>
          <span className="drawer-stat">🍴 {project.forks}</span>
          <span className="drawer-stat">🕐 Updated {project.lastUpdated}</span>
        </div>

        {/* Tabs */}
        <div className="drawer-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={`drawer-tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t === "overview" && "📋 "}
              {t === "code" && "📂 "}
              {t === "readme" && "📝 "}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="drawer-body">

          {/* ── OVERVIEW ── */}
          {tab === "overview" && (
            <div className="drawer-overview">
              {/* Image gallery */}
              <div className="drawer-gallery">
                <div className="drawer-gallery-main">
                  <img
                    src={project.images[activeImg]?.url}
                    alt={project.images[activeImg]?.alt}
                  />
                </div>
                <div className="drawer-gallery-thumbs">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className={`drawer-thumb ${activeImg === i ? "active" : ""}`}
                      onClick={() => setActiveImg(i)}
                    >
                      <img src={img.url} alt={img.alt} />
                      <span>{img.alt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="drawer-desc-block">
                <h3 className="drawer-section-label">About</h3>
                <p className="drawer-long-desc">{project.longDesc}</p>
              </div>

              {/* Highlights */}
              <div className="drawer-desc-block">
                <h3 className="drawer-section-label">Key Highlights</h3>
                <ul className="drawer-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="drawer-check">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="drawer-desc-block">
                <h3 className="drawer-section-label">Tech Stack</h3>
                <div className="project-tags" style={{ gap: "0.5rem" }}>
                  {project.tags.map((t, i) => (
                    <span key={i} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── CODE / FOLDER STRUCTURE ── */}
          {tab === "code" && (
            <div className="drawer-code">
              <div className="drawer-repo-bar">
                <div className="drawer-repo-bar-left">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="drawer-repo-name">
                    sivaprasath2004 / <strong>{project.name}</strong>
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-repo-link"
                >
                  View on GitHub ↗
                </a>
              </div>

              <div className="drawer-branch-bar">
                <span className="drawer-branch-badge">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 019 8.5H7A1 1 0 006 9.5v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 017 7h2a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25z"/>
                  </svg>
                  main
                </span>
                <span className="drawer-file-count">
                  {project.structure.length} items
                </span>
              </div>

              <div className="drawer-filetree">
                <FileTree nodes={project.structure} github={project.github} />
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="drawer-view-all-files"
              >
                View all files on GitHub ↗
              </a>
            </div>
          )}

          {/* ── README ── */}
          {tab === "readme" && (
            <div className="drawer-readme">
              <div className="drawer-readme-header">
                <span>📝 README.md</span>
                <a
                  href={`${project.github}/blob/main/README.md`}
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-repo-link"
                >
                  View raw ↗
                </a>
              </div>
              <div className="drawer-readme-body">
                {renderReadme(project.readme)}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

/* ─── Project Card ─── */
const ProjectCard = ({ project, onClick }) => (
  <div
    className="project-card"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    style={{ cursor: "pointer" }}
  >
    <div className="project-img-wrap">
      <img
        src={project.images[0]?.url}
        alt={project.images[0]?.alt || project.name}
      />
      <span className="project-badge">{project.badge}</span>
      <div className="project-card-hover-overlay">
        <span className="project-card-hover-text">View Details →</span>
      </div>
    </div>
    <div className="project-body">
      <div className="project-name-row">
        <h3 className="project-name">{project.name}</h3>
        <div className="project-meta-icons">
          <span title="Stars">⭐ {project.stars}</span>
          <span title="Language">
            <span className="lang-dot" style={{ background: project.languageColor }} />
            {project.language}
          </span>
        </div>
      </div>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.slice(0, 4).map((t, i) => (
          <span key={i} className="project-tag">{t}</span>
        ))}
        {project.tags.length > 4 && (
          <span className="project-tag">+{project.tags.length - 4}</span>
        )}
      </div>
      <div className="project-actions">
        <button
          className="project-btn filled"
          onClick={(e) => { e.stopPropagation(); onClick(); }}
        >
          📋 View Details
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginRight: 4 }}>
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
);

/* ─── Main Project Section ─── */
const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-inner">
      <div style={{ textAlign: "center" }}>
        <p className="section-eyebrow">Explore My</p>
        <h2 className="section-title">
          Featured <span className="grad-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Click any project to explore details, folder structure, and README.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.key}
            project={p}
            onClick={() => setActiveProject(p)}
          />
        ))}
      </div>

      {/* See More */}
      <a
        href="https://github.com/sivaprasath2004?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="see-more-btn"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        See More Projects on GitHub
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>

      {/* Drawer */}
      {activeProject && (
        <ProjectDrawer
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default Project;
