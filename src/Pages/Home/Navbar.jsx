import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar-modern">
      <div className="navbar-modern__container">
        <div
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </div>

        <div className={`navbar-modern__content ${navActive ? "active" : ""}`}>
          <ul className="navbar-modern__list">
            <li className="navbar-modern__item">
              <Link
                onClick={closeMenu}
                activeClass="navbar-modern__link--active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="heroSection"
                className="navbar-modern__link"
              >
                Home
              </Link>
            </li>
            <li className="navbar-modern__item">
              <Link
                onClick={closeMenu}
                activeClass="navbar-modern__link--active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="AboutMe"
                className="navbar-modern__link"
              >
                About
              </Link>
            </li>
            <li className="navbar-modern__item">
              <Link
                onClick={closeMenu}
                activeClass="navbar-modern__link--active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="MySkills"
                className="navbar-modern__link"
              >
                Service
              </Link>
            </li>

            <li className="navbar-modern__brand">RAGHUL</li>

            <li className="navbar-modern__item">
              <Link
                onClick={closeMenu}
                activeClass="navbar-modern__link--active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="MyPortfolio"
                className="navbar-modern__link"
              >
                Resume
              </Link>
            </li>
            <li className="navbar-modern__item">
              <Link
                onClick={closeMenu}
                activeClass="navbar-modern__link--active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="MyPortfolio"
                className="navbar-modern__link"
              >
                Project
              </Link>
            </li>
            <li className="navbar-modern__item">
              <Link
                onClick={closeMenu}
                activeClass="navbar-modern__link--active"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                to="Contact"
                className="navbar-modern__link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
