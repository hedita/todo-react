import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { StatusLengthContext } from "../../../StatusLengthContext";
import { DarkModeContext } from "../../pages/ConfigurationPage/DarkModeContext";
const Navbar = () => {
  const { todosCount } = useContext(StatusLengthContext);
  const { darkMode } = useContext(DarkModeContext);
  const navbarItemClass = darkMode ? "navbar-item dark-mode" : "navbar-item";

  return (
    <nav className="navbar">
      <ul className="filter-list">
        <li className="filter-item">
          <Link
            className={navbarItemClass}
            to="/add"
          >
            Add
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={navbarItemClass}
            to="/"
          >
            All {todosCount.all}
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={navbarItemClass}
            to="/completed"
          >
            Completed {todosCount.completed}
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={navbarItemClass}
            to="/uncompleted"
          >
            Uncompleted {todosCount.all - todosCount.completed}
          </Link>
        </li>
        <li className="filter-item">
          <Link
            className={navbarItemClass}
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
