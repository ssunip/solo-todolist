import React, { useReducer, createContext, useContext, useEffect } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "SELECT":
      return action.todo;
    case "CREATE":
      return state.concat(action.todo);
    case "CHECKED":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.todo.id
          ? { ...todo, text: action.todo.text, checked: action.todo.checked }
          : todo
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "SELECT",
          todo: data,
        })
      );
  }, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
