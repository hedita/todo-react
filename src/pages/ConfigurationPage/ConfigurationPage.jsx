import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import "./ConfigurationPage.scss";

const ConfigurationPage = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <button
      className={`light-switch ${darkMode ? "dark-mode" : ""}`}
      onClick={toggleTheme}
    >
      {darkMode ? "light Mode" : "Dark Mode"}
    </button>
  );
};

export default ConfigurationPage;
