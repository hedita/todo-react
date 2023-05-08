import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="filter-list">
        <li className="filter-item">
          <Link className="navbar-item" to="/Add">
            Add
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/">
            All
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/Completed">
            Completed
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/Uncompleted">
            Uncompleted
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/Configuration">
            Configuration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
