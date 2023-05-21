import React, { useContext } from "react";
import { useState, useEffect } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import { apiBaseUrl } from "../../../config";
import { StatusLengthContext } from "../../StatusLengthContext";

const TodoList = ({ isDone }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const { length, setLength } = useContext(StatusLengthContext);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setLength(tasks.length);
  }, [tasks]);

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
          .map(({ text, id, createdAt, isDone }) => {
            return <TodoItem key={id} createdAt={createdAt} text={text} />;
          })}
      </ul>
    </>
  );
};

export default TodoList;
