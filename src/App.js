import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

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

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: white;
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

let nextId = 4;

const App = () => {
  const [open, setOpen] = useState(false);
  const [completeNumber, setCompleteNumber] = useState(2);
  const [selectedTodo, setSelectedTodo] = useState(null);
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

  const onToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setOpen(!open);
  };

  const onCreateTodo = (text) => {
    if (text === "") {
      return alert("Please enter your new thing :)");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => [...todos, todo]);
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHeader />
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onToggle={onToggle}
        />
        {open && (
          <TodoCreate
            onToggle={onToggle}
            onCreateTodo={onCreateTodo}
            selectedTodo={selectedTodo}
          />
        )}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </Template>
    </>
  );
};

export default App;
