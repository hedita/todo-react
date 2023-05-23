import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { StatusLengthContext } from "../../../StatusLengthContext";

const Navbar = () => {
  const { todosCount } = useContext(StatusLengthContext);

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
            All {todosCount.all}
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/completed">
            Completed {todosCount.completed}
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/uncompleted">
            Uncompleted {todosCount.all - todosCount.completed}
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
