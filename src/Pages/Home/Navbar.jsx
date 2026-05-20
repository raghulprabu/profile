import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NAV_LINKS = [
  { label: "Home",     to: "heroSection" },
  { label: "About",    to: "AboutMe"     },
  { label: "Skills",   to: "mySkills"    },
  { label: "Projects", to: "MyPortfolio" },
  { label: "Reviews",  to: "testimonial" },
  { label: "Contact",  to: "Contact"     },
];

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner">

        {/* Brand */}
        <Link
          to="heroSection"
          smooth={true}
          duration={500}
          offset={-90}
          className="nav__brand"
          onClick={() => setMenuOpen(false)}
        >
          RAG<span className="nav__brand--accent">HUL</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="nav__link--active"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          offset={-90}
          className="nav__cta"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

        {/* Hamburger */}
        <button
          className={`nav__toggle${menuOpen ? " nav__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__mobile${menuOpen ? " nav__mobile--open" : ""}`}>
        <ul className="nav__mobile-links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                activeClass="nav__link--active"
                className="nav__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={-90}
              className="nav__mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
