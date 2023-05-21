import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { StatusLengthContext } from "../../StatusLengthContext";

const Navbar = () => {
  const { length } = useContext(StatusLengthContext);

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
            All{length}
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
