import React, { useContext, useState, useEffect } from 'react';
import './Photos.scss';
import { ThemeContext } from '../../context/ThemeContextProvider';
import Loading from '../Loading/Loading';
const Photos = ({ url, name }) => {
  const { isColored } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
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
