import React from "react";
import "./TodoItem.scss";
import { useState, useContext } from "react";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { StatusLengthContext } from "../../../StatusLengthContext";

const TodoItem = ({ text, createdAt, taskId, tasks, setTasks }) => {
  const [error, setError] = useState(null);
  const { allLength, setAllLength } = useContext(StatusLengthContext);

  const deleteTodo = () => {
    try {
      fetch(`${apiBaseUrl}/todos/${taskId}`, {
        method: "DELETE",
        headers: requestDefaultHeaders,
      });
      setTasks(tasks.filter((task) => task.id !== taskId));
      setAllLength(allLength - 1);
    } catch (error) {
      setError(error.message);
    }
  };

  function formatDate(date) {
    const dateTime = new Date(date);
    const year = dateTime.toLocaleDateString("en-US", { year: "numeric" });
    const month = dateTime.toLocaleDateString("en-US", { month: "short" });
    const day = dateTime.toLocaleDateString("en-US", { day: "numeric" });

    return `${day} ${month} ${year}`;
  }

  return (
    <>
      {error && <p className="error-message">Something went wrong!</p>}
      <li title={formatDate(createdAt)} className="todo-item">
        {text}
        <button className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
