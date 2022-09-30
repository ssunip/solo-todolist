import "./App.css";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </Template>
    </>
  );
};

export default App;
