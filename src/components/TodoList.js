import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 10px;
  background-color: #414141;
`;

const Main = styled.main`
  margin-top: 40px;
  height: 500px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  position: absolute;
  margin-left: 10px;
  color: white;
  font-weight: 700;
`;

const TodoList = ({ onChangeSelectedtodo, onUpdateToggle }) => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      <Title>INBOX</Title>
      <Main>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            checked={todo.checked}
            todo={todo}
            onChangeSelectedtodo={onChangeSelectedtodo}
            onUpdateToggle={onUpdateToggle}
          />
        ))}
      </Main>
    </TodoListBlock>
  );
};

export default TodoList;
