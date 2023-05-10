import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="filter-list">
        <li className="filter-item">
          <Link className="navbar-item" to="/add">
            Add
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/">
            All
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/completed">
            Completed
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/uncompleted">
            Uncompleted
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/configuration">
            Configuration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
