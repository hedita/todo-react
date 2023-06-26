import { addTodo, getTodoList } from "../api";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "../api";

export const useGetTodoList = (options = {}) => {
  return useQuery({
    queryKey: ["todo-list"],
    queryFn: getTodoList,
    ...options,
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo-list"]);
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo-list"]);
    },
  });
};

export const useEditTodo = (options = {}) => {
  const queryClient = useQueryClient();
  const { onSuccess, ...restOptions } = options;
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["todo-list"]);
      onSuccess(...args);
    },
    ...restOptions,
  });
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo-list"]);
    },
  });
};
