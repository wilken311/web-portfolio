import React, { useContext } from 'react';
// import './DarkMode.css';
import './DarkMode.scss';
import { ThemeContext } from '../../context/ThemeContextProvider';

const DarkMode = () => {
  const { isColored, setIsColored } = useContext(ThemeContext);
  return (
    <div>
      <input
        type="checkbox"
        id="darkmode-toggle"
        onClick={() => setIsColored(!isColored)}
      />
      <label htmlFor="darkmode-toggle" className="darkmode-button ">
        <span
          className={`${
            isColored
              ? 'darkmode-button__circle--colored'
              : 'darkmode-button__circle--gray'
          }`}
        ></span>
      </label>
    </div>
  );
};

export default DarkMode;
