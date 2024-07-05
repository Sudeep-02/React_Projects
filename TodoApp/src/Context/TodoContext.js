import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo Msg", checked: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
