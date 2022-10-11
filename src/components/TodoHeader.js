import React from "react";
import styled from "styled-components";

const TodoHeaderBlock = styled.div`
  padding: 55px 20px 20px 20px;
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
  .tasks-left {
    font-size: 15px;
  }
  .todo_detail {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .dimmed_layer {
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 150px;
    height: 225px;
    background-color: #414141;
    opacity: 0.15;
  }
`;

const today = () => {
  const date = new Date();
  return (
    date.getFullYear() + " / " + (date.getMonth() + 1) + " / " + date.getDate()
  );
};

const TodoHeader = () => {
  return (
    <TodoHeaderBlock>
      <div>
        Your
        <br />
        Things...
      </div>
      <div className="todo_detail">
        <span className="today">{today()}</span>
        <span className="tasks-left">completed 5 / 10</span>
      </div>
      <span className="dimmed_layer"></span>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
