import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const ConfigurationPage = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <button className="lightSwitch" onClick={toggleTheme}>
      {darkMode ? "light Mode" : "Dark Mode"}
      {console.log(darkMode)}
    </button>
  );
};

export default ConfigurationPage;
