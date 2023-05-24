import React from "react";
import "./TodoItem.scss";
import { useState, useContext } from "react";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { formatDate } from "../../utils";

const TodoItem = ({ text, createdAt, taskId, getTasks }) => {
  const [error, setError] = useState("");

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
