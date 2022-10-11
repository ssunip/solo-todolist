import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  background: #e9ecef;
}
`;

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: true,
    },
    {
      id: 3,
      text: "할일 3",
      checked: false,
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHeader />
        <TodoList todos={todos} />
        <TodoCreate />
      </Template>
    </>
  );
};

export default App;
