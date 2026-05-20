import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for opportunities
        </div>

        <h2 className="hero-greeting">Hi there, I'm</h2>
        <h1 className="hero-name">RAGHUL</h1>

        <p className="hero-role">
          Front-End&nbsp;
          <span className="hero-role-highlight">Developer</span>
          <span className="hero-role-cursor"></span>
        </p>

        <p className="hero-description">
          I love front-end development specializing in Web and Mobile Development.
          As a fresher in the tech world, I bring a fresh perspective and an
          insatiable hunger for learning and growth.
        </p>

        <div className="hero-cta">
          <a
            href="./img/Raghul CV.pdf"
            target="_blank"
            download
            className="btn-primary-new"
          >
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <Link
            to="MyPortfolio"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn-outline-new"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="hero-social">
          <a href="https://github.com/raghulprabu" target="_blank" rel="noreferrer" className="hero-social-link" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.24 1.838 1.24 1.07 1.836 2.807 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.307-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.307-.54-1.523.12-3.176 0 0 1.005-.322 3.3 1.23a11.523 11.523 0 013.005-.4c1.015.005 2.035.136 3.005.4 2.29-1.552 3.295-1.23 3.295-1.23.66 1.653.246 2.87.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.286 0 .32.21.695.825.575C20.565 21.798 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/raghul-prabu-490991234/" target="_blank" rel="noreferrer" className="hero-social-link" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://www.behance.net/raghulp1" target="_blank" rel="noreferrer" className="hero-social-link" title="Behance">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 4.404v15.192h6.993c2.698 0 4.983-.914 4.983-3.886 0-1.71-.771-2.95-2.324-3.516 1.148-.632 1.808-1.65 1.808-2.992 0-2.82-2.004-3.798-4.59-3.798H0zm3.22 2.516h3.234c1.018 0 1.892.282 1.892 1.45 0 1.06-.634 1.544-1.664 1.544H3.22V6.92zm0 5.352h3.57c1.168 0 2.06.484 2.06 1.764 0 1.28-.994 1.678-2.112 1.678H3.22v-3.442zM15.276 7.8c-3.014 0-4.93 2.054-4.93 5.032 0 3.074 1.87 4.918 4.93 4.918 2.354 0 3.91-1.082 4.622-3.28h-2.48c-.258.698-1.044 1.16-2.03 1.16-1.476 0-2.264-.874-2.264-2.306h7.02C20.254 10.15 18.62 7.8 15.276 7.8zm-2.152 3.886c.12-1.12.822-1.97 2.152-1.97 1.262 0 1.946.892 2.028 1.97h-4.18zM13.578 4.5h4.728v1.312h-4.728V4.5z" />
            </svg>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="hero-social-link" title="Twitter / X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.848L1.258 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src="./img/hero-image.png" alt="Raghul" className="hero-image" />
      </div>
    </section>
  );
}
