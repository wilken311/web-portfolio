import React, { useContext } from 'react';
import './Photos.scss';
import { ThemeContext } from '../../context/ThemeContextProvider';
const Photos = ({ url, name }) => {
  const { isColored } = useContext(ThemeContext);

  return (
    <div className="photo-container">
      <img
        src={url}
        alt={name}
        className={`photo__item--image ${
          isColored ? 'theme-colored' : 'theme-gray'
        }`}
        loading="lazy"
      ></img>
    </div>
  );
};

export default Photos;
