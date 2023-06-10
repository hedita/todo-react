import React, { useContext } from "react";
import "./AddPage.scss";
import { useState } from "react";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { StatusLengthContext } from "../../../StatusLengthContext";
import { DarkModeContext } from "../ConfigurationPage/DarkModeContext";

const AddPage = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { setTodosCount } = useContext(StatusLengthContext);
  const { darkMode } = useContext(DarkModeContext);

  const postTodo = async () => {
    try {
      setError("");
      setIsSuccess("");
      await fetch(`${apiBaseUrl}/todos`, {
        method: "POST",
        headers: requestDefaultHeaders,
        body: JSON.stringify({ text }),
      });
      setIsSuccess(true);
      setText("");
      setTodosCount((prevCount) => ({
        ...prevCount,
        all: prevCount.all + 1,
      }));
    } catch (error) {
      setError(error.message);
    }
  };
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
        onClick={postTodo}
      >
        Add
      </button>
    </div>
  );
};

export default AddPage;
