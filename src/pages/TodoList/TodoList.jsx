import React from "react";
import { useState, useEffect } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import { apiBaseUrl } from "../../../config";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    try {
      const response = await fetch(`${apiBaseUrl}/todos`);
      const { data } = await response.json();
      setTasks(data);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      {error && <p className="error-message">Something went wrong!</p>}
      <ul>
        {tasks
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(({ text, id, createdAt }) => {
            return <TodoItem  key={id} createdAt={createdAt} text={text} />;
          })}
      </ul>
    </>
  );
};

export default TodoList;
