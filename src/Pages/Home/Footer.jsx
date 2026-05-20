import { Link } from "react-scroll";

const SERVICES = [
  { icon: "⚡", label: "Front-End Development", desc: "React.js, JavaScript, HTML5 & CSS3" },
  { icon: "🌐", label: "Web Application",       desc: "Bootstrap, Tailwind, jQuery, AJAX" },
  { icon: "📱", label: "Mobile Development",    desc: "React Native & Android Studio"     },
  { icon: "🎨", label: "UI / UX Design",        desc: "Figma, Wireframing & Prototyping"  },
];

const NAV_LINKS = [
  { label: "Home",     to: "heroSection" },
  { label: "About",    to: "AboutMe"     },
  { label: "Skills",   to: "mySkills"    },
  { label: "Projects", to: "MyPortfolio" },
  { label: "Reviews",  to: "testimonial" },
  { label: "Contact",  to: "Contact"     },
];

const TECH = [
  "HTML5","CSS3","JavaScript","React.js","React Native",
  "Tailwind CSS","Bootstrap 5","jQuery","AJAX","Firebase",
  "Android Studio","Figma","Git",
];

const SOCIALS = [
  {
    title: "GitHub",
    href: "https://github.com/raghulprabu",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.836 2.807 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.307-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.307-.54-1.523.12-3.176 0 0 1.005-.322 3.3 1.23a11.523 11.523 0 013.005-.4c1.015.005 2.035.136 3.005.4 2.29-1.552 3.295-1.23 3.295-1.23.66 1.653.246 2.87.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.286 0 .32.21.695.825.575C20.565 21.798 24 17.302 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/raghul-prabu-490991234/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    title: "Behance",
    href: "https://www.behance.net/raghulp1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 4.404v15.192h6.993c2.698 0 4.983-.914 4.983-3.886 0-1.71-.771-2.95-2.324-3.516 1.148-.632 1.808-1.65 1.808-2.992 0-2.82-2.004-3.798-4.59-3.798H0zm3.22 2.516h3.234c1.018 0 1.892.282 1.892 1.45 0 1.06-.634 1.544-1.664 1.544H3.22V6.92zm0 5.352h3.57c1.168 0 2.06.484 2.06 1.764 0 1.28-.994 1.678-2.112 1.678H3.22v-3.442zM15.276 7.8c-3.014 0-4.93 2.054-4.93 5.032 0 3.074 1.87 4.918 4.93 4.918 2.354 0 3.91-1.082 4.622-3.28h-2.48c-.258.698-1.044 1.16-2.03 1.16-1.476 0-2.264-.874-2.264-2.306h7.02C20.254 10.15 18.62 7.8 15.276 7.8zm-2.152 3.886c.12-1.12.822-1.97 2.152-1.97 1.262 0 1.946.892 2.028 1.97h-4.18zM13.578 4.5h4.728v1.312h-4.728V4.5z"/>
      </svg>
    ),
  },
  {
    title: "Twitter / X",
    href: "https://www.twitter.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.848L1.258 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="ft">

      {/* ── CTA BAND ─────────────────────────────── */}
      <div className="ft-cta">
        <div className="ft-cta__inner">
          <div className="ft-cta__left">
            <span className="ft-cta__badge">
              <span className="ft-cta__dot"></span>
              Open to Work
            </span>
            <h2 className="ft-cta__heading">
              Let's Build Something<br />
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="ft-cta__sub">
              Available for freelance projects, full-time roles, and exciting collaborations.
            </p>
          </div>
          <div className="ft-cta__actions">
            <Link to="MyPortfolio" smooth={true} duration={500} offset={-70} className="ft-cta__btn-outline">
              View My Work
            </Link>
            <Link to="Contact" smooth={true} duration={500} offset={-70} className="ft-cta__btn-primary">
              Contact Me
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN BODY ─────────────────────────────── */}
      <div className="ft-body">
        <div className="ft-grid">

          {/* Col 1 — Brand */}
          <div className="ft-col ft-col--brand">
            <div className="ft-brand-name">RAG<span className="gradient-text">HUL</span></div>
            <p className="ft-brand-role">Front-End Developer &amp; UI/UX Designer</p>
            <p className="ft-brand-bio">
              A self-motivated Computer Science graduate with a passion for building
              beautiful, responsive, and user-friendly digital products. Skilled in
              web &amp; mobile development, I bring creativity and a hunger for
              continuous growth to every project.
            </p>

            {/* Education card */}
            <div className="ft-edu">
              <span className="ft-edu__icon">🎓</span>
              <div>
                <div className="ft-edu__degree">B.E. Computer Science &amp; Engineering</div>
                <div className="ft-edu__school">Coimbatore Institute of Engineering &amp; Technology</div>
                <div className="ft-edu__cgpa">CGPA — 7.52</div>
              </div>
            </div>

            {/* Social icons */}
            <div className="ft-socials">
              {SOCIALS.map(({ title, href, icon }) => (
                <a key={title} href={href} target="_blank" rel="noreferrer" className="ft-social" title={title}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="ft-col">
            <h4 className="ft-col__heading">Services</h4>
            <ul className="ft-services">
              {SERVICES.map(({ icon, label, desc }) => (
                <li key={label} className="ft-service">
                  <span className="ft-service__icon">{icon}</span>
                  <div>
                    <div className="ft-service__label">{label}</div>
                    <div className="ft-service__desc">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Explore */}
          <div className="ft-col">
            <h4 className="ft-col__heading">Explore</h4>
            <ul className="ft-nav-list">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} smooth={true} duration={500} offset={-70} className="ft-nav-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get In Touch */}
          <div className="ft-col">
            <h4 className="ft-col__heading">Get In Touch</h4>
            <ul className="ft-contact-list">
              <li className="ft-contact-item">
                <span className="ft-contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a href="mailto:raghulitsme23@gmail.com" className="ft-contact-val">
                  raghulitsme23@gmail.com
                </a>
              </li>
              <li className="ft-contact-item">
                <span className="ft-contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.31h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.56-1.56a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <a href="tel:+919025606653" className="ft-contact-val">+91 90256 06653</a>
              </li>
              <li className="ft-contact-item">
                <span className="ft-contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="ft-contact-val">Coimbatore, Tamil Nadu, India</span>
              </li>
            </ul>

            {/* Availability card */}
            <div className="ft-avail">
              <div className="ft-avail__dot"></div>
              <div>
                <div className="ft-avail__title">Currently Available</div>
                <div className="ft-avail__sub">For freelance &amp; full-time roles</div>
              </div>
            </div>

            {/* CV download */}
            <a href="./img/Raghul CV.pdf" download target="_blank" className="ft-cv-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* ── TECH STACK STRIP ─────────────────── */}
        <div className="ft-tech">
          <span className="ft-tech__label">Tech Stack</span>
          <div className="ft-tech__pills">
            {TECH.map((t) => (
              <span key={t} className="ft-tech__pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────── */}
      <div className="ft-bottom">
        <div className="ft-bottom__inner">
          <p className="ft-copy">
            © 2024 <span className="gradient-text">Raghul Prabu</span>. Designed &amp; built with passion.
          </p>
          <div className="ft-policy">
            <Link to="Privacy_Policy"   smooth={true} duration={500} className="ft-policy-link">Privacy Policy</Link>
            <span className="ft-policy-sep">·</span>
            <Link to="Terms_of_Service" smooth={true} duration={500} className="ft-policy-link">Terms of Service</Link>
            <span className="ft-policy-sep">·</span>
            <Link to="Cookies_Settings" smooth={true} duration={500} className="ft-policy-link">Cookie Settings</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
