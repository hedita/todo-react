import React from "react";
import "./AddPage.scss";
import { useState } from "react";
import "../../../config";

const AddPage = () => {
  const apiBaseUrl = "http://localhost:3030";
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const postTodo = async () => {
    try {
      await fetch(`${apiBaseUrl}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      setIsSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <p className="error-message">{error.message}</p>}
      {isSuccess && <p className="success-message">Task successfully added.</p>}
      <input
        className="add-input"
        placeholder="Write..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="add-button" onClick={postTodo}>
        Add
      </button>
    </div>
  );
};

export default AddPage;
