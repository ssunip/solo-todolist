import React from "react";
import styled, { css } from "styled-components";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { BiPencil, BiTrash } from "react-icons/bi";

const Remove = styled.div`
  margin: 0px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c3b274;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Update = styled.div`
  margin: 0px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c3b274;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  padding: 0px 10px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #414141;
  border-bottom: 1px solid #d9d9d9;
  // &:hover {
  //   ${Remove} {
  //     display: initial;
  //   }
  }
  .checked {
    margin-right: 1rem;
    font-size: 25px;
    color: #c3b274;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 15px;
  color: #ffffff;
`;
// ${(props) =>
//   props.done &&
//   css`
//     color: #ced4da;
//   `}

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;

  return (
    <TodoItemBlock>
      <MdCheckCircleOutline className="checked" />
      <Text>{text}</Text>
      <Update>
        <BiPencil />
      </Update>
      <Remove>
        <BiTrash />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
