import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="filter-list">
        <li className="filter-item">
          <Link to="/Add">Add</Link>
        </li>
        <li className="filter-item">
          <Link to="/">All</Link>
        </li>
        <li className="filter-item">
          <Link to="/Completed">Completed</Link>
        </li>
        <li className="filter-item">
          <Link to="/Uncompleted">Uncompleted</Link>
        </li>
        <li className="filter-item">
          <Link to="/Configuration">Configuration</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
