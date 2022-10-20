import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";
import Template from "./components/Template";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoUpdate from "./components/TodoUpdate";
import { useEffect, useState } from "react";
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
  const [todos, setTodos] = useState([]);

  const setAllTodos = () => {
    fetch("http://localhost:3001/todos/")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    setAllTodos();
  }, []);

  const addTodo = (text) => {
    const newTodo = { text, checked: false };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => setTodos((todos) => [...todos, data]));
  };

  const checkedTodo = (id) => {
    const target = todos.find((todo) => todo.id === id);
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checked: !target.checked,
      }),
    })
      .then((res) => res.json())
      .then(
        (res) =>
          res &&
          setTodos((todos) =>
            todos.map((todo) =>
              todo.id === res.id ? { ...todo, checked: !todo.checked } : todo
            )
          )
      );
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (res) =>
          res && setTodos((todos) => todos.filter((todo) => todo.id !== id))
      );
  };

  const updateTodo = (id, text) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    })
      .then((res) => res.json())
      .then(
        (res) =>
          res &&
          setTodos((todos) =>
            todos.map((todo) => (todo.id === res.id ? { ...todo, text } : todo))
          )
      );
  };

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
    <>
      <GlobalStyle />
      <Template>
        <TodoHeader todos={todos} />
        <TodoList
          todos={todos}
          onChangeSelectedtodo={onChangeSelectedtodo}
          onUpdateToggle={onUpdateToggle}
          deleteTodo={deleteTodo}
          checkedTodo={checkedTodo}
        />
        {updateOpen && (
          <TodoUpdate
            id={selectedTodo.id}
            onUpdateToggle={onUpdateToggle}
            selectedTodo={selectedTodo}
            updateTodo={updateTodo}
          />
        )}
        {open && <TodoCreate onToggle={onToggle} addTodo={addTodo} />}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </Template>
    </>
  );
};

export default App;
