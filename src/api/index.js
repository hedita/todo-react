import { apiBaseUrl, requestDefaultHeaders } from "../../config";

export const getTodoList = async () => {
  const res = await fetch(`${apiBaseUrl}/todos`);
  const data = await res.json();
  return data.data;
};

export const addTodo = async ({ text }) => {
  const res = await fetch(`${apiBaseUrl}/todos`, {
    method: "POST",
    headers: requestDefaultHeaders,
    body: JSON.stringify({ text }),
  });
  const data = await res.json();
  return data.data;
};

export const deleteTodo = async (taskId) => {
  const res = await fetch(`${apiBaseUrl}/todos/${taskId}`, {
    method: "DELETE",
    headers: requestDefaultHeaders,
  });
  const data = await res.json();
  return data.data;
};

export const editTodo = async ({ taskId, newText }) => {
  const res = await fetch(`${apiBaseUrl}/todos/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify({ text: newText }),
    headers: requestDefaultHeaders,
  });
  const data = await res.json();
  return data.data;
};

export const updateStatus = async ({ taskId, isDone }) => {
  const res = await fetch(`${apiBaseUrl}/todos/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify({ isDone }),
    headers: requestDefaultHeaders,
  });
  const data = await res.json();
  return data.data;
};
