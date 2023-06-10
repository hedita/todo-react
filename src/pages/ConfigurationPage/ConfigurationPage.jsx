import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const ConfigurationPage = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <button className="lightSwitch" onClick={toggleTheme}>
      {darkMode ? "light Mode" : "Dark Mode"}
    </button>
  );
};

export default ConfigurationPage;
