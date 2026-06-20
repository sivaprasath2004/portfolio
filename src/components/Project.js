import React, { useState, useEffect, useCallback } from "react";
import data from "../data";

const { projects } = data;

/* ─── SVG Icon Library ─── */
const Icon = ({ name, size = 16, color = "currentColor" }) => {
  const icons = {
    github: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    fork: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
      </svg>
    ),
    branch: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H8A1 1 0 0 0 7 9.5v1.128a2.251 2.251 0 1 1-1.5 0V9.5A2.5 2.5 0 0 1 8 7h2a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Z"/>
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    folder: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    folderOpen: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2z"/>
      </svg>
    ),
    file: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    fileCode: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/>
      </svg>
    ),
    fileJson: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M10 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1M14 12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1"/>
      </svg>
    ),
    fileMd: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M8 13v4M8 13l2 2 2-2M16 17v-4M16 17l-2-2"/>
      </svg>
    ),
    fileLock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <rect x="9" y="13" width="6" height="4" rx="1"/><path d="M10 13v-1a2 2 0 1 1 4 0v1"/>
      </svg>
    ),
    fileIgnore: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="12" x2="15" y2="18"/><line x1="15" y1="12" x2="9" y2="18"/>
      </svg>
    ),
    chevronRight: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    ),
    chevronDown: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    ),
    externalLink: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    overview: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    code: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    readme: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    close: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    ),
    list: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
  };
  return icons[name] || icons.file;
};


/* ─── Badge color helper ─── */
const BADGE_COLORS = {
  "npm Package":  "linear-gradient(135deg,#cb3837,#a02d2c)",
  "Desktop App":  "linear-gradient(135deg,#5c6bc0,#3949ab)",
  "Final Year":   "linear-gradient(135deg,#00897b,#00695c)",
  "Full Stack":   "linear-gradient(135deg,#7c5cfc,#c850c0)",
  "Mobile":       "linear-gradient(135deg,#f7971e,#ffd200)",
  "Realtime":     "linear-gradient(135deg,#11998e,#38ef7d)",
  "Web App":      "linear-gradient(135deg,#3d8af7,#1a56db)",
};
const getBadgeStyle = (badge) => ({
  background: BADGE_COLORS[badge] || BADGE_COLORS["Full Stack"],
});

/* ─── File type → icon mapping ─── */
const FileIcon = ({ type, name, isOpen }) => {
  if (type === "dir") {
    return isOpen
      ? <Icon name="folderOpen" size={15} color="#e3a920" />
      : <Icon name="folder" size={15} color="#e3a920" />;
  }
  const ext = name.split(".").pop().toLowerCase();
  const map = {
    js: { icon: "fileCode", color: "#f1e05a" },
    jsx: { icon: "fileCode", color: "#61dafb" },
    ts: { icon: "fileCode", color: "#3178c6" },
    tsx: { icon: "fileCode", color: "#3178c6" },
    json: { icon: "fileJson", color: "#cbcb41" },
    md: { icon: "fileMd", color: "#a0c4ff" },
    env: { icon: "fileLock", color: "#ff9a3c" },
    example: { icon: "fileLock", color: "#ff9a3c" },
    gitignore: { icon: "fileIgnore", color: "#f14e32" },
    css: { icon: "fileCode", color: "#563d7c" },
    html: { icon: "fileCode", color: "#e34c26" },
    pug: { icon: "fileCode", color: "#a86454" },
  };
  const cfg = map[ext] || { icon: "file", color: "var(--text3)" };
  return <Icon name={cfg.icon} size={15} color={cfg.color} />;
};

/* ─── Markdown-lite renderer ─── */
const renderReadme = (md) => {
  const lines = md.split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
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
          <pre><code>{codeLines.join("\n")}</code></pre>
        </div>
      );
      i++; continue;
    }
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
            <thead><tr>{headers.map((h, j) => <th key={j}>{h.trim()}</th>)}</tr></thead>
            <tbody>{rows.map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k}>{cell.trim()}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      continue;
    }
    if (line.startsWith("# "))  { out.push(<h1 key={i} className="rm-h1">{line.slice(2)}</h1>);  i++; continue; }
    if (line.startsWith("## ")) { out.push(<h2 key={i} className="rm-h2">{line.slice(3)}</h2>);  i++; continue; }
    if (line.startsWith("### ")){ out.push(<h3 key={i} className="rm-h3">{line.slice(4)}</h3>);  i++; continue; }
    if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      out.push(<ul key={i} className="rm-list">{items.map((it, j) => <li key={j}>{inlineFormat(it)}</li>)}</ul>);
      continue;
    }
    if (!line.trim()) { i++; continue; }
    out.push(<p key={i} className="rm-p">{inlineFormat(line)}</p>);
    i++;
  }
  return out;
};
const inlineFormat = (text) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("`") && p.endsWith("`")) return <code key={i} className="rm-inline-code">{p.slice(1,-1)}</code>;
    if (p.startsWith("**") && p.endsWith("**")) return <strong key={i}>{p.slice(2,-2)}</strong>;
    return p;
  });
};

/* ─── File Tree ─── */
const FileTree = ({ nodes, depth = 0, github }) => {
  const [open, setOpen] = useState(depth === 0 ? nodes.map((_, i) => i) : []);
  const toggle = (i) => setOpen((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  return (
    <ul className="ft-list" style={{ paddingLeft: depth === 0 ? 0 : 18 }}>
      {nodes.map((node, i) => (
        <li key={i} className="ft-item">
          {node.type === "dir" ? (
            <>
              <button className="ft-row ft-row-dir" onClick={() => toggle(i)}>
                <span className="ft-chevron">
                  {open.includes(i)
                    ? <Icon name="chevronDown" size={12} color="var(--text3)" />
                    : <Icon name="chevronRight" size={12} color="var(--text3)" />}
                </span>
                <FileIcon type="dir" name={node.name} isOpen={open.includes(i)} />
                <span className="ft-name">{node.name}</span>
              </button>
              {open.includes(i) && node.children?.length > 0 && (
                <FileTree nodes={node.children} depth={depth + 1} github={github} />
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
              <span className="ft-ext-link"><Icon name="externalLink" size={11} color="var(--accent)" /></span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

/* ─── Project Drawer ─── */
const TABS = [
  { id: "overview", label: "Overview",  iconName: "overview" },
  { id: "code",     label: "Code",      iconName: "code"     },
  { id: "readme",   label: "Readme",    iconName: "readme"   },
];

const ProjectDrawer = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState("overview");

  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);
  const handleKey = useCallback((e) => { if (e.key === "Escape") onClose(); }, [onClose]);
  useEffect(() => { window.addEventListener("keydown", handleKey); return () => window.removeEventListener("keydown", handleKey); }, [handleKey]);

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="project-drawer">
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-header-left">
            <span className="project-badge" style={{ position: "static", ...getBadgeStyle(project.badge) }}>{project.badge}</span>
            <div>
              <h2 className="drawer-title">{project.name}</h2>
              <p className="drawer-tagline">{project.tagline}</p>
            </div>
          </div>
          <div className="drawer-header-right">
            <a href={project.github} target="_blank" rel="noreferrer" className="drawer-gh-btn">
              <Icon name="github" size={16} />
              GitHub
            </a>
            {project.npm && (
              <a href={project.npm} target="_blank" rel="noreferrer" className="drawer-gh-btn drawer-npm-btn">
                <svg width="14" height="14" viewBox="0 0 780 250" fill="currentColor">
                  <path d="M240 250V0H0v250h240zm-160-40V80h40v130h40V80h40v170H80zm320 40V0H260v250h140zm-60-80V80h40v130h-40zm200-170v250h100V80h40v210h40V0H500z"/>
                </svg>
                npm
              </a>
            )}
            <button className="drawer-close" onClick={onClose} aria-label="Close">
              <Icon name="close" size={16} />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="drawer-stats">
          <span className="drawer-stat">
            <span className="drawer-stat-dot" style={{ background: project.languageColor }} />
            {project.language}
          </span>
          <span className="drawer-stat">
            <Icon name="star" size={13} color="#e3a920" />
            {project.stars}
          </span>
          <span className="drawer-stat">
            <Icon name="fork" size={13} color="var(--text3)" />
            {project.forks}
          </span>
          <span className="drawer-stat">
            <Icon name="clock" size={13} color="var(--text3)" />
            Updated {project.lastUpdated}
          </span>
        </div>

        {/* Tabs */}
        <div className="drawer-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`drawer-tab ${tab === t.id ? "active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              <Icon name={t.iconName} size={14} color={tab === t.id ? "var(--accent)" : "var(--text3)"} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="drawer-body">

          {/* ── OVERVIEW ── */}
          {tab === "overview" && (
            <div className="drawer-overview">
              <div className="drawer-gallery">
                <div className="drawer-gallery-main">
                  <img src={project.images[activeImg]?.url} alt={project.images[activeImg]?.alt} />
                </div>
                <div className="drawer-gallery-thumbs">
                  {project.images.map((img, i) => (
                    <div key={i} className={`drawer-thumb ${activeImg === i ? "active" : ""}`} onClick={() => setActiveImg(i)}>
                      <img src={img.url} alt={img.alt} />
                      <span>{img.alt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="drawer-desc-block">
                <h3 className="drawer-section-label">About</h3>
                <p className="drawer-long-desc">{project.longDesc}</p>
              </div>

              <div className="drawer-desc-block">
                <h3 className="drawer-section-label">Key Highlights</h3>
                <ul className="drawer-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="drawer-check"><Icon name="check" size={14} color="var(--accent3)" /></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="drawer-desc-block">
                <h3 className="drawer-section-label">Tech Stack</h3>
                <div className="project-tags" style={{ gap: "0.5rem" }}>
                  {project.tags.map((t, i) => <span key={i} className="project-tag">{t}</span>)}
                </div>
              </div>
            </div>
          )}

          {/* ── CODE ── */}
          {tab === "code" && (
            <div className="drawer-code">
              <div className="drawer-repo-bar">
                <div className="drawer-repo-bar-left">
                  <Icon name="github" size={16} color="var(--text3)" />
                  <span className="drawer-repo-name">
                    sivaprasath2004 / <strong>{project.name}</strong>
                  </span>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="drawer-repo-link">
                  View on GitHub <Icon name="externalLink" size={12} />
                </a>
              </div>

              <div className="drawer-branch-bar">
                <span className="drawer-branch-badge">
                  <Icon name="branch" size={12} color="var(--text3)" />
                  main
                </span>
                <span className="drawer-file-count">{project.structure.length} items</span>
              </div>

              <div className="drawer-filetree">
                <FileTree nodes={project.structure} github={project.github} />
              </div>

              <a href={project.github} target="_blank" rel="noreferrer" className="drawer-view-all-files">
                <Icon name="github" size={15} />
                View all files on GitHub
                <Icon name="externalLink" size={13} />
              </a>
            </div>
          )}

          {/* ── README ── */}
          {tab === "readme" && (
            <div className="drawer-readme">
              <div className="drawer-readme-header">
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon name="readme" size={14} color="var(--text3)" />
                  README.md
                </span>
                <a href={`${project.github}/blob/main/README.md`} target="_blank" rel="noreferrer" className="drawer-repo-link">
                  View raw <Icon name="externalLink" size={12} />
                </a>
              </div>
              <div className="drawer-readme-body">{renderReadme(project.readme)}</div>
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
  >
    <div className="project-img-wrap">
      <img src={project.images[0]?.url} alt={project.images[0]?.alt || project.name} />
      <span className="project-badge" style={getBadgeStyle(project.badge)}>{project.badge}</span>
      <div className="project-card-hover-overlay">
        <span className="project-card-hover-text">
          <Icon name="overview" size={15} color="#fff" /> View Details
        </span>
      </div>
    </div>
    <div className="project-body">
      <div className="project-name-row">
        <h3 className="project-name">{project.name}</h3>
        <div className="project-meta-icons">
          <span title="Stars" style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Icon name="star" size={13} color="#e3a920" /> {project.stars}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <span className="lang-dot" style={{ background: project.languageColor }} />
            {project.language}
          </span>
        </div>
      </div>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.slice(0, 4).map((t, i) => <span key={i} className="project-tag">{t}</span>)}
        {project.tags.length > 4 && <span className="project-tag">+{project.tags.length - 4}</span>}
      </div>
      <div className="project-actions">
        <button
          className="project-btn filled" style={{alignItems:'center'}}
          onClick={(e) => { e.stopPropagation(); onClick(); }}
        >
          <Icon name="list" size={15} color="#fff" /> Details
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name="github" size={14} color="var(--text2)" /> GitHub
        </a>
      </div>
    </div>
  </div>
);

/* ─── Main Section ─── */
const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-inner">
      <div style={{ textAlign: "center" }}>
        <p className="section-eyebrow">Explore My</p>
        <h2 className="section-title">Featured <span className="grad-text">Projects</span></h2>
        <p className="section-subtitle">Click any project to explore details, folder structure, and README.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.key} project={p} onClick={() => setActiveProject(p)} />
        ))}
      </div>

      <a
        href="https://github.com/sivaprasath2004?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="see-more-btn"
      >
        <Icon name="github" size={18} />
        See More Projects on GitHub
        <Icon name="externalLink" size={14} />
      </a>

      {activeProject && (
        <ProjectDrawer project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
};

export default Project;
