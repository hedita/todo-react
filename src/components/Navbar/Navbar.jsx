import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AllStatusLengthContext } from "../../Contexts/AllStatusLengthContext";
import { CompletedStatusLengthContext } from "../../Contexts/CompletedStatusLengthContext";
import { UncompletedStatusLengthContext } from "../../Contexts/UncompletedStatusLengthContext";

const Navbar = () => {
  const { allLength } = useContext(AllStatusLengthContext);
  const { completedLength } = useContext(CompletedStatusLengthContext);
  const { uncompletedLength } = useContext(UncompletedStatusLengthContext);

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
            All{allLength}
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/completed">
            Completed{completedLength}
          </Link>
        </li>
        <li className="filter-item">
          <Link className="navbar-item" to="/uncompleted">
            Uncompleted{uncompletedLength}
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
