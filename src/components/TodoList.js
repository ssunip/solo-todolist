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

const Title = styled.div`
  margin-left: 10px;
  color: white;
  font-weight: 700;
`;

const TodoList = ({ todos, onCheckToggle, onToggle }) => {
  return (
    <TodoListBlock>
      <Title>INBOX</Title>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckToggle={onCheckToggle}
          onToggle={onToggle}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
