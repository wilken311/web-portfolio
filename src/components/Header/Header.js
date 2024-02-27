import React, { useState, useContext } from 'react';
import './Header.scss';
import DarkMode from '../DarkMode/DarkMode';
import NavBar from '../NavBar/NavBar';
import { ThemeContext } from '../../context/ThemeContextProvider';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isColored } = useContext(ThemeContext);

  return (
    <>
      <div
        className={isOpen ? 'backdrop' : 'backdrop-close'}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={isColored ? 'main-header-colored' : 'main-header-gray'}>
        <div>
          <div className="header-developer">
            <div className="header-developer__name">
              WILKEN <b>MONTERO</b>
            </div>
            <div className="header-developer__darkmode">
              <DarkMode />
            </div>
          </div>
          <div className="header-position">FULL-STACK DEVELOPER</div>
        </div>
        <NavBar isMobileNavOpen={isOpen} setIsMobileNavOpen={setIsOpen} />
        <div>
          <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
