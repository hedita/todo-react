import React, { useContext } from "react";
import "./AddPage.scss";
import { useState } from "react";
import { DarkModeContext } from "../ConfigurationPage/DarkModeContext";
import { useMutation } from "@tanstack/react-query";
import { addTodo } from "../../api";

const AddPage = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const mutationAdd = useMutation(addTodo);

  return (
    <div className="add-container">
      {error && <p className="error-message">Something went wrong!</p>}
      {isSuccess && <p className="success-message">Task successfully added.</p>}
      <input
        className={`add-input ${darkMode ? "dark-mode" : ""}`}
        placeholder="Write..."
        value={text}
        onInput={(e) => {
          setText(e.target.value);
          setError("");
          setIsSuccess("");
        }}
      />
      <button
        className={`add-button ${darkMode ? "dark-mode" : ""}`}
        onClick={() => {
          mutationAdd.mutate({ text });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddPage;
