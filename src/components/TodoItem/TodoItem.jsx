import React, { useEffect } from "react";
import "./TodoItem.scss";
import { useState } from "react";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { formatDate } from "../../utils";

const TodoItem = ({ text, createdAt, taskId, getTasks }) => {
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);

  const deleteTodo = () => {
    try {
      setError("");
      fetch(`${apiBaseUrl}/todos/${taskId}`, {
        method: "DELETE",
        headers: requestDefaultHeaders,
      });
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const updateStatus = () => {
    try {
      fetch(`${apiBaseUrl}/todos/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify({ isDone }),
        headers: requestDefaultHeaders,
      });
      setIsDone(!isDone);
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="error-message">Something went wrong!</p>}
      <li title={formatDate(createdAt)} className="todo-item">
        <input
          className="isDone-checkbox"
          type="checkbox"
          onClick={updateStatus}
        />
        {text}
        <button className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
