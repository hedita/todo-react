import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ text }) => {
  return <li className="todo-item">{text}</li>;
};

export default TodoItem;
