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


  // useEffect(() => {
  //   getTasks();
  // }, []);

  useEffect(() => {
    if (Array.isArray(tasks)) {
      const completedLength = tasks.filter((task) => task.isDone).length;
      setTodosCount({ all: tasks.length, completed: completedLength });
    }
  }, [tasks]);

  // async function getTasks() {
  //   try {
  //     const response = await fetch(`${apiBaseUrl}/todos`);
  //     const { data } = await response.json();
  //     setTasks(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }

  const getTasks = () => {
    const { isLoading, error, data } = useQuery({
      queryKey: ["repoData"],
      queryFn: () => fetch(`${apiBaseUrl}/todos`).then((res) => res.json()),
    });

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
  };

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
                getTasks={getTasks}
                isDone={isDone}
              />
            );
          })}
      </ul>
    </>
  );
};

export default TodoList;
