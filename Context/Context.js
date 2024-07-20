import { createContext, useState } from 'react';

export const ThemeContext = createContext('#1e90ff');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("#1e90ff");

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;