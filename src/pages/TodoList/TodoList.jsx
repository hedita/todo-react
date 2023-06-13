import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import TodoItem from "../../components/TodoItem/TodoItem";
import { apiBaseUrl } from "../../../config";
import { StatusLengthContext } from "../../../StatusLengthContext";
import "./TodoList.scss";

const TodoList = ({ status }) => {
  const [tasks, setTasks] = useState([]);
  const { setTodosCount } = useContext(StatusLengthContext);

  useEffect(() => {
    if (Array.isArray(tasks)) {
      const completedLength = tasks.filter((task) => task.isDone).length;
      setTodosCount({ all: tasks.length, completed: completedLength });
    }
  }, [tasks]);

  const fetchTodos = async () => {
    const res = await fetch(`${apiBaseUrl}/todos`);
    const data = await res.json();
    setTasks(data.data);
    return data;
  };

  const { data, isLoading, error } = useQuery("todos", fetchTodos);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ul className="todos-list">
        {data.data
          .filter((task) => {
            if (status === "completed") {
              return task.isDone;
            }
            if (status === "uncompleted") {
              return !task.isDone;
            }
            return tasks;
          })
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(({ text, id, createdAt, isDone }) => {
            return (
              <TodoItem
                key={id}
                createdAt={createdAt}
                text={text}
                taskId={id}
                getTasks={data}
                isDone={isDone}
              />
            );
          })}
      </ul>
    </>
  );
};

export default TodoList;
