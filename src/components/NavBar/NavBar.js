import React from 'react';
// import './NavBar.css';
import './NavBar.scss';
import DarkMode from '../DarkMode/DarkMode';
const NavBar = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  return (
    <div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="#home">HOME</a>
          </li>
          <li className="main-nav__item">
            <a href="#about-me">ABOUT ME</a>
          </li>
          <li className="main-nav__item">
            <a href="#works">WORKS</a>
          </li>
          <li className="main-nav__item">
            <a href="#skills">SKILLS</a>
          </li>
        </ul>
      </nav>
      <nav className={isMobileNavOpen ? 'mobile-nav' : 'mobile-nav-close'}>
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <a
              href="#home"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              HOME
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              href="#about-me"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              ABOUT ME
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              href="#work"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              WORKS
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              href="#skills"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              SKILLS
            </a>
          </li>
          <li
            className="mobile-nav__item"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <DarkMode />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
