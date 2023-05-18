import React from "react";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../../config";
import "./TodoItem.scss";

const TodoItem = () => {
  const [tasks, setTasks] = useState([]);
	const [error, setError] = useState(null);

  useEffect(() => {
    getTasks();
  });

  async function getTasks() {
		try {
			const response = await fetch(`${apiBaseUrl}/todos`);
			const { data } = await response.json();
			setTasks(data);
		} catch (error) {
			setError(error.message)
		} 
  }
  return tasks.map(({ text, id }) => {
    return <li key={id} className="todo-item">{text}</li>;
  });
};

export default TodoItem;