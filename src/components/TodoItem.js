import React from "react";
import styled from "styled-components";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useTodoDispatch } from "../TodoContext";

const Remove = styled.div`
  margin: 0px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c3b274;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: white;
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
    color: white;
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
`;

const CheckedCircle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 25px;
  color: #c3b274;

  .checked {
    text-decoration: line-through;
    opacity: 0.6;
    transition: 0.125s all ease-in;
  }
`;

const Text = styled.div`
  padding-left: 15px;
  flex: 1;
  font-size: 15px;
  color: #ffffff;
`;

const TodoItem = ({
  id,
  text,
  checked,
  todo,
  onChangeSelectedtodo,
  onUpdateToggle,
}) => {
  const dispatch = useTodoDispatch();
  const onCheckToggle = () => dispatch({ type: "CHECKED", id });
  const onDelete = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckedCircle checked={checked} onClick={onCheckToggle}>
        {checked ? <MdCheckCircleOutline /> : <MdRadioButtonUnchecked />}
        <Text className={`${checked ? "checked" : ""}`}>{text}</Text>
      </CheckedCircle>

      <Update>
        <BiPencil
          onClick={() => {
            onUpdateToggle();
            onChangeSelectedtodo(todo);
          }}
        />
      </Update>
      <Remove>
        <BiTrash onClick={onDelete} />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
