import React from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import { useGetTodoList } from "../../hooks";
import "./TodoList.scss";

const TodoList = ({ status }) => {
  const { data, isLoading, error } = useGetTodoList({
    select: (data) => {
      return data
        .filter((item) => {
          if (status === "completed") {
            return item.isDone;
          }
          if (status === "uncompleted") {
            return !item.isDone;
          }
          return data;
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
  });

  if (isLoading) return "Loading...";
  if (error) return `An error has occurred: ${error.message} `;

  return (
    <>
      <ul className="todos-list">
        {data.map(({ text, id, createdAt, isDone }) => {
          return (
            <TodoItem
              key={id}
              createdAt={createdAt}
              text={text}
              taskId={id}
              isDone={isDone}
              isLoading={isLoading}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
