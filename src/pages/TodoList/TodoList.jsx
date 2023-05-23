import React, { useContext } from "react";
import { useState, useEffect } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import { apiBaseUrl } from "../../../config";
import { AllStatusLengthContext } from "../../Contexts/AllStatusLengthContext";
import { CompletedStatusLengthContext } from "../../Contexts/CompletedStatusLengthContext";
import { UncompletedStatusLengthContext } from "../../Contexts/UncompletedStatusLengthContext";

const TodoList = ({ status }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const { setAllLength } = useContext(AllStatusLengthContext);
  const { setCompletedLength } = useContext(CompletedStatusLengthContext);
  const { setUncompletedLength } = useContext(UncompletedStatusLengthContext);

  const completedLength = tasks.filter((task) => task.isDone).length;
  const uncompletedLength = tasks.filter((task) => !task.isDone).length;

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setAllLength(tasks.length);
    setCompletedLength(completedLength);
    setUncompletedLength(uncompletedLength);
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
          .filter((task) => {
            if (status === "completed") {
              return task.isDone === true;
            } else if (status === "uncompleted") {
              return task.isDone === false;
            } else {
              return tasks;
            }
          })
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(({ text, id, createdAt }) => {
            return <TodoItem key={id} createdAt={createdAt} text={text} />;
          })}
      </ul>
    </>
  );
};

export default TodoList;
