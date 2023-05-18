import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ text, createdAt }) => {
	  
  function formatDate(date) {
    const dateTime = new Date(date);
    const year = dateTime.toLocaleDateString("en-US", { year: "numeric" });
    const month = dateTime.toLocaleDateString("en-US", { month: "short" });
    const day = dateTime.toLocaleDateString("en-US", { day: "numeric" });
  
    return `${day} ${month} ${year}`;
  }

  return <li title={formatDate(createdAt)} className="todo-item">{text}</li>;
};

export default TodoItem;
