import React, { useState } from "react";
import axios from "axios";

/* ─── SVG Icons ─── */
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const UserIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const AtIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  </svg>
);
const TagIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);
const MessageIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const CONTACT_DETAILS = [
  {
    href: "mailto:prasathsiva2004@gmail.com",
    icon: <MailIcon />,
    iconBg: "linear-gradient(135deg,#7c5cfc,#c850c0)",
    label: "EMAIL",
    value: "prasathsiva2004@gmail.com",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/sivaprasath2004/",
    icon: <LinkedInIcon />,
    iconBg: "linear-gradient(135deg,#0077b5,#00a0dc)",
    label: "LINKEDIN",
    value: "Sivaprasath",
    external: true,
  },
  {
    href: "https://github.com/sivaprasath2004",
    icon: <GitHubIcon />,
    iconBg: "linear-gradient(135deg,#24292e,#586069)",
    label: "GITHUB",
    value: "sivaprasath2004",
    external: true,
  },
  {
    href: null,
    icon: <LocationIcon />,
    iconBg: "linear-gradient(135deg,#ff416c,#ff4b2b)",
    label: "LOCATION",
    value: "Coimbatore, India",
    external: false,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const showAlert = (type, msg) => {
    setAlert({ type, msg });
    setTimeout(() => setAlert(null), 6000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://profolio-backend-one.vercel.app/contactus", form);
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
      showAlert(
        res.data?.response ? "success" : "error",
        res.data?.response ? "Message sent successfully!" : "Something went wrong. Please try again."
      );
    } catch {
      setLoading(false);
      showAlert("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-inner">
      <div style={{ textAlign: "center" }}>
        <p className="section-eyebrow">Get in Touch</p>
        <h2 className="section-title">Contact <span className="grad-text">Me</span></h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>
      </div>

      <div className="contact-grid">
        {/* ── Info Cards ── */}
        <div className="contact-info">
          {CONTACT_DETAILS.map((d, i) => {
            const inner = (
              <>
                <div className="contact-detail-icon" style={{ background: d.iconBg }}>
                  {d.icon}
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">{d.label}</span>
                  <span className="contact-detail-value">{d.value}</span>
                </div>
              </>
            );
            return d.href ? (
              <a
                key={i}
                href={d.href}
                className="contact-detail"
                target={d.external ? "_blank" : undefined}
                rel={d.external ? "noreferrer" : undefined}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="contact-detail" style={{ cursor: "default" }}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* ── Form ── */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {alert && (
            <div className={`form-alert ${alert.type}`}>
              {alert.type === "success" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              )}
              {alert.msg}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                <UserIcon /> NAME
              </label>
              <input className="form-input" type="text" name="name" placeholder="John Doe" required value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">
                <AtIcon /> EMAIL
              </label>
              <input className="form-input" type="email" name="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <TagIcon /> SUBJECT
            </label>
            <input className="form-input" type="text" name="subject" placeholder="Project Inquiry" required value={form.subject} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label">
              <MessageIcon /> MESSAGE
            </label>
            <textarea className="form-textarea" name="message" placeholder="Tell me about your project..." required value={form.message} onChange={handleChange} />
          </div>

          <button className="form-submit" type="submit" disabled={loading}>
            {loading ? (
              <><div className="spinner" /> Sending...</>
            ) : (
              <><SendIcon /> Send Message</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
