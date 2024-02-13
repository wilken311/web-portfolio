import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isColored, setIsColored] = useState(false);
  return (
    <ThemeContext.Provider value={{ isColored, setIsColored }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
