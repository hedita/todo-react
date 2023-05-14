import React from "react";
import "./AddPage.scss";
import { useState } from "react";

const AddPage = () => {
  const url = "http://localhost:3030";
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [done, setDone] = useState(null);
  const handleAddTodo = async () => {
    await postTodo();
  };

  const postTodo = async () => {
     try {
      await fetch(`${url}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    setDone("done");
  } catch (error) {
    setError(error);
  }
  }
  return (
    <div>
      {error ? <p className="error-message">{error.message}</p> : null}
      {done ? <p className="success-message">Task successfully added.</p> : null}
      <input
        className="add-input"
        placeholder="Write..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="add-button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default AddPage;
