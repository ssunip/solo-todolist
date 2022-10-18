import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoUpdate from "./components/TodoUpdate";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  background: #e9ecef;
}
`;

const CircleButton = styled.button`
  background: #c3b274;
  &:hover {
    background: white;
  }
  &:active {
    background: white;
  }

  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 60px;
  right: -10px;
  bottom: 50px;
  transform: translate(-50%, 50%);
  color: #414141;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  box-shadow: 0px 2px 10px 5px #c3b27450;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: white;
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const App = () => {
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const onToggle = () => {
    setOpen(!open);
  };

  const onUpdateToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setUpdateOpen(!updateOpen);
  };

  const onChangeSelectedtodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <TodoHeader />
        <TodoList
          onChangeSelectedtodo={onChangeSelectedtodo}
          onUpdateToggle={onUpdateToggle}
        />
        {updateOpen && (
          <TodoUpdate
            id={selectedTodo.id}
            onUpdateToggle={onUpdateToggle}
            selectedTodo={selectedTodo}
          />
        )}
        {open && <TodoCreate onToggle={onToggle} />}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </Template>
    </TodoProvider>
  );
};

export default App;
