import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../pages/ConfigurationPage/DarkModeContext";
import { useGetTodoList } from "../../hooks";
import { useMemo } from "react";

const Navbar = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navbarItemClass = `navbar-item ${darkMode ? "dark-mode" : ""}`;
  const { data } = useGetTodoList();
  const { completedTodoList, uncompletedTodoList, todoListLength } =
    useMemo(() => {
      let todoListLength = 0;
      let completedTodoList = 0;
      let uncompletedTodoList = 0;

      if (data) {
        todoListLength = data.length;
        completedTodoList = data.filter((task) => task.isDone).length;
        uncompletedTodoList = todoListLength - completedTodoList;
      }
      return { todoListLength, completedTodoList, uncompletedTodoList };
    }, [data]);

  return (
    <nav className="navbar">
      <ul className="filter-list">
        <li className="filter-item">
          <Link className={navbarItemClass} to="/add">
            Add
          </Link>
        </li>
        <li className="filter-item">
          <Link className={navbarItemClass} to="/">
            All {todoListLength}
          </Link>
        </li>
        <li className="filter-item">
          <Link className={navbarItemClass} to="/completed">
            Completed {completedTodoList}
          </Link>
        </li>
        <li className="filter-item">
          <Link className={navbarItemClass} to="/uncompleted">
            Uncompleted {uncompletedTodoList}
          </Link>
        </li>
        <li className="filter-item">
          <Link className={navbarItemClass} to="/configuration">
            Configuration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
