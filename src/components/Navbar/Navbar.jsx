import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { StatusLengthContext } from "../../../StatusLengthContext";
import { DarkModeContext } from "../../pages/ConfigurationPage/DarkModeContext";
const Navbar = () => {
  const { todosCount } = useContext(StatusLengthContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <nav className="navbar">
      <ul className="filter-list">
        <li className="filter-item">
          <Link
            className={`navbar-item ${darkMode ? "dark-mode" : "light-mode"}`}
            to="/add"
          >
            Add
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={`navbar-item ${darkMode ? "dark-mode" : "light-mode"}`}
            to="/"
          >
            All {todosCount.all}
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={`navbar-item ${darkMode ? "dark-mode" : "light-mode"}`}
            to="/completed"
          >
            Completed {todosCount.completed}
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={`navbar-item ${darkMode ? "dark-mode" : "light-mode"}`}
            to="/uncompleted"
          >
            Uncompleted {todosCount.all - todosCount.completed}
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={`navbar-item ${darkMode ? "dark-mode" : "light-mode"}`}
            to="/configuration"
          >
            Configuration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
