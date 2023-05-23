import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { StatusLengthContext } from "../../../StatusLengthContext";

const Navbar = () => {
  const { allLength, completedLength } =
    useContext(StatusLengthContext);

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
            All {allLength}
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/completed">
            Completed {completedLength}
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/uncompleted">
            Uncompleted {allLength - completedLength}
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
