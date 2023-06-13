import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import "./TodoItem.scss";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { formatDate } from "../../utils";
import { DarkModeContext } from "../../pages/ConfigurationPage/DarkModeContext";

const TodoItem = ({ text, createdAt, taskId, getTasks, isDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const { darkMode } = useContext(DarkModeContext);

  const deleteTodo = async () => {
    try {
      setError("");
      await fetch(`${apiBaseUrl}/todos/${taskId}`, {
        method: "DELETE",
        headers: requestDefaultHeaders,
      });
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const updateStatus = async (event) => {
    try {
      await fetch(`${apiBaseUrl}/todos/${taskId}`, {
        method: "PATCH",
        body: JSON.stringify({ isDone: event.target.checked }),
        headers: requestDefaultHeaders,
      });
      getTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const saveNewTodo = async () => {
    if (newText === text) {
      setIsEditing(false);
      return;
    }

    try {
      await fetch(`${apiBaseUrl}/todos/${taskId}`, {
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
      {error && <li className="error-message">Something went wrong!</li>}
      <li
        title={formatDate(createdAt)}
        className={`todo-item ${darkMode ? "dark-mode" : ""}`}
      >
        <input
          className="isDone-checkbox"
          type="checkbox"
          onChange={updateStatus}
          checked={isDone}
        />

        {isEditing ? (
          <input
            className="editing-input"
            type="text"
            value={newText}
            onChange={handleInputChange}
            onBlur={saveNewTodo}
          />
        ) : (
          <p className="todo-text" onClick={editTodo}>
            {text}
          </p>
        )}
        <button
          className={`delete-button ${darkMode ? "dark-mode" : ""}`}
          onClick={deleteTodo}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
