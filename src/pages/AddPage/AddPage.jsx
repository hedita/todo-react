import React from "react";
import "./AddPage.scss";
import { useState } from "react";
import { apiBaseUrl } from "../../../config";
import { requestDefaultHeaders } from "../../../config";

const AddPage = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const postTodo = async () => {
    try {
      await fetch(`${apiBaseUrl}/todos`, {
        method: "POST",
        headers: requestDefaultHeaders,
        body: JSON.stringify({ text }),
      });
      setIsSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <p className="error-message">Something went wrong!</p>}
      {isSuccess && <p className="success-message">Task successfully added.</p>}
      <input
        className="add-input"
        placeholder="Write..."
        onChange={(e) => {
          setText(e.target.value);
          setError("");
          setIsSuccess("");
        }}
      />
      <button className="add-button" onClick={postTodo}>
        Add
      </button>
    </div>
  );
};

export default AddPage;
