import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_i28wqhu";
    const templateId = "template_9vv1y0m";
    const publicKey = "BbuHzWDbN4HAbGH7U";

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: "Web Wizard",
      message,
      phone_number: phoneNumber,
      topic,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setTopic("");
        setMessage("");
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="section-header">
        <span className="badge">Get In Touch</span>
        <h2>Contact <span className="gradient-text">Me</span></h2>
        <p>
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left — contact info */}
        <div className="contact-info">
          <div>
            <h3 className="contact-info-title">Let's work together</h3>
            <p className="contact-info-desc">
              Whether you have a job opportunity, a project idea, or just want
              to connect — my inbox is always open.
            </p>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">📧</div>
            <div>
              <div className="contact-detail-label">Email</div>
              <div className="contact-detail-value">raghulitsme23@gmail.com</div>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">📞</div>
            <div>
              <div className="contact-detail-label">Phone</div>
              <div className="contact-detail-value">+91 9025606653</div>
            </div>
          </div>

          <div className="contact-social-links">
            <a href="https://github.com/raghulprabu" target="_blank" rel="noreferrer" className="contact-social-link" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.836 2.807 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.307-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.307-.54-1.523.12-3.176 0 0 1.005-.322 3.3 1.23a11.523 11.523 0 013.005-.4c1.015.005 2.035.136 3.005.4 2.29-1.552 3.295-1.23 3.295-1.23.66 1.653.246 2.87.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.286 0 .32.21.695.825.575C20.565 21.798 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/raghul-prabu-490991234/" target="_blank" rel="noreferrer" className="contact-social-link" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.behance.net/raghulp1" target="_blank" rel="noreferrer" className="contact-social-link" title="Behance">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 4.404v15.192h6.993c2.698 0 4.983-.914 4.983-3.886 0-1.71-.771-2.95-2.324-3.516 1.148-.632 1.808-1.65 1.808-2.992 0-2.82-2.004-3.798-4.59-3.798H0zm3.22 2.516h3.234c1.018 0 1.892.282 1.892 1.45 0 1.06-.634 1.544-1.664 1.544H3.22V6.92zm0 5.352h3.57c1.168 0 2.06.484 2.06 1.764 0 1.28-.994 1.678-2.112 1.678H3.22v-3.442zM15.276 7.8c-3.014 0-4.93 2.054-4.93 5.032 0 3.074 1.87 4.918 4.93 4.918 2.354 0 3.91-1.082 4.622-3.28h-2.48c-.258.698-1.044 1.16-2.03 1.16-1.476 0-2.264-.874-2.264-2.306h7.02C20.254 10.15 18.62 7.8 15.276 7.8zm-2.152 3.886c.12-1.12.822-1.97 2.152-1.97 1.262 0 1.946.892 2.028 1.97h-4.18zM13.578 4.5h4.728v1.312h-4.728V4.5z" />
              </svg>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="contact-social-link" title="Twitter / X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.848L1.258 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="contact-form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 00000 00000"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="topic">Topic</label>
            <div className="form-select-wrapper">
              <select
                id="topic"
                className="form-input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              >
                <option value="">Select a topic...</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Personal">Personal</option>
              </select>
              <span className="form-select-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or opportunity..."
              rows="6"
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
