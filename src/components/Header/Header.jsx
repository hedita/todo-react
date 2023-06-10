import React, { useContext } from "react";
import "../Header/Header.scss";
import { DarkModeContext } from "../../pages/ConfigurationPage/DarkModeContext";

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <h1 className={`title ${darkMode ? "dark-mode" : "light-mode"}`}>Todo</h1>
  );
};

export default Header;
