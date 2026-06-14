import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const showAlert = (type, msg) => {
    setAlert({ type, msg });
    setTimeout(() => setAlert(null), 6000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://profolio-backend-one.vercel.app/contactus",
        form
      );
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
      showAlert(res.data?.response ? "success" : "error",
        res.data?.response ? "✔ Message sent successfully!" : "Something went wrong. Please try again.");
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
        <div className="contact-info">
          <a href="mailto:prasathsiva2004@gmail.com" className="contact-detail">
            <div className="contact-detail-icon">✉️</div>
            <div className="contact-detail-text">
              <span className="contact-detail-label">EMAIL</span>
              <span className="contact-detail-value">prasathsiva2004@gmail.com</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sivaprasath2004/" className="contact-detail" target="_blank" rel="noreferrer">
            <div className="contact-detail-icon">💼</div>
            <div className="contact-detail-text">
              <span className="contact-detail-label">LINKEDIN</span>
              <span className="contact-detail-value">Sivaprasath</span>
            </div>
          </a>
          <a href="https://github.com/sivaprasath2004" className="contact-detail" target="_blank" rel="noreferrer">
            <div className="contact-detail-icon">🐙</div>
            <div className="contact-detail-text">
              <span className="contact-detail-label">GITHUB</span>
              <span className="contact-detail-value">sivaprasath2004</span>
            </div>
          </a>
          <div className="contact-detail" style={{ cursor: "default" }}>
            <div className="contact-detail-icon">📍</div>
            <div className="contact-detail-text">
              <span className="contact-detail-label">LOCATION</span>
              <span className="contact-detail-value">Coimbatore, India</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {alert && (
            <div className={`form-alert ${alert.type}`}>{alert.msg}</div>
          )}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">NAME</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">SUBJECT</label>
            <input
              className="form-input"
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              required
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">MESSAGE</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project..."
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="form-submit" type="submit" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner" /> Sending...
              </>
            ) : (
              "Send Message →"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
