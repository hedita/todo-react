import React from "react";
import { createContext, useState } from "react";

const DarkModeContext = createContext(false);

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
