import React, { useState } from "react";
import "./TodoItem.scss";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { formatDate } from "../../utils";

const TodoItem = ({ text, createdAt, taskId, getTasks }) => {
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

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

  const saveNewTodo = () => {
    if (newText === text) {
      setIsEditing(false);
      return;
    }

    try {
      fetch(`${apiBaseUrl}/todos/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify({ text: newText }),
        headers: requestDefaultHeaders,
      });
      setIsEditing(false);
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const editTodo = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setNewText(event.target.value);
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

        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={handleInputChange}
            onBlur={saveNewTodo}
          />
        ) : (
          <p onClick={editTodo}>{text}</p>
        )}
        <button className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
