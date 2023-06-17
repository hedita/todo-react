import React, { useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./TodoItem.scss";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { formatDate } from "../../utils";
import { DarkModeContext } from "../../pages/ConfigurationPage/DarkModeContext";
import { useDeleteTodo } from "../../hooks";
import { useEditTodo } from "../../hooks";
import { useUpdateStatus } from "../../hooks";

const TodoItem = ({ text, createdAt, taskId, isDone }) => {
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const { darkMode } = useContext(DarkModeContext);
  const mutationDelete = useDeleteTodo();
  const mutationEdit = useEditTodo({
    onSuccess: () => {
      setIsEditing(false);
    },
  });
  const mutationUpdate = useUpdateStatus();

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
          onChange={() => {
            mutationUpdate.mutate({ taskId, isDone: !isDone });
          }}
          defaultChecked={isDone}
        />

        {isEditing ? (
          <input
            className="editing-input"
            type="text"
            value={newText}
            onChange={handleInputChange}
            onBlur={() => {
              if (newText === text) {
                setIsEditing(false);
                return;
              }
              mutationEdit.mutate({ taskId, newText });
            }}
          />
        ) : (
          <p className="todo-text" onClick={editTodo}>
            {text}
          </p>
        )}
        <button
          className={`delete-button ${darkMode ? "dark-mode" : ""}`}
          onClick={() => {
            mutationDelete.mutate(taskId);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
