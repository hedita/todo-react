import React, { useContext } from "react";
import "./AddPage.scss";
import { useState } from "react";
import { apiBaseUrl, requestDefaultHeaders } from "../../../config";
import { StatusLengthContext } from "../../../StatusLengthContext";

const AddPage = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { todosCount, setTodosCount } = useContext(StatusLengthContext);

  const postTodo = async () => {
    try {
      await fetch(`${apiBaseUrl}/todos`, {
        method: "POST",
        headers: requestDefaultHeaders,
        body: JSON.stringify({ text }),
      });
      setError("");
      setIsSuccess("");
      setText("")
      setIsSuccess(true);
      setTodosCount({
        all: todosCount.all + 1,
        uncompleted: todosCount.uncompleted + 1,
      });
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
