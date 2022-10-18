import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeaderBlock = styled.div`
  padding: 55px 15px 20px 20px;
  height: 225px;
  background-image: url("https://user-images.githubusercontent.com/104997140/194756331-60afbebd-1fb6-43ad-9a64-230676b24fdb.jpg");
  background-size: 375px 225px;
  color: #ffffff;
  border-bottom: 1px solid #e9ecef;
  font-size: 36px;
  white-space: pre-line;
  position: relative;
  .today {
    font-size: 15px;
  }
  .todo_detail {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .dimmed_layer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 150px;
    height: 225px;
    background-color: #41414115;
  }
  .tasks-left {
    margin: 30px 0;
    font-size: 15px;
  }
`;

const today = () => {
  const date = new Date();
  return (
    date.getFullYear() + " / " + (date.getMonth() + 1) + " / " + date.getDate()
  );
};

const TodoHeader = () => {
  const todos = useTodoState();
  const checkedTodos = todos.filter((todo) => todo.checked);

  return (
    <TodoHeaderBlock>
      <div>
        Your
        <br />
        Things...
      </div>
      <div className="todo_detail">
        <span className="today">{today()}</span>
      </div>
      <div className="dimmed_layer">
        <span className="tasks-left">
          completed {checkedTodos.length} / {todos.length}
        </span>
      </div>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
