import React from "react";
import "./TodoItem.scss";
import { useState, useContext } from "react";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { StatusLengthContext } from "../../../StatusLengthContext";
import { formatDate } from "../../utils";

const TodoItem = ({ text, createdAt, taskId, tasks, setTasks }) => {
  const [error, setError] = useState(null);
  const { allLength, setAllLength } = useContext(StatusLengthContext);
  <formatDate />;

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
