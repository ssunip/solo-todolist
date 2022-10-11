import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 10px;
  padding-bottom: 48px;
  overflow-y: auto;
  background-color: #414141;
`;

const TodoList = ({ todos }) => {
  return (
    <TodoListBlock>
      {/* INBOX */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
