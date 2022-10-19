import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const Background = styled.div`
  position: absolute;
  z-index: 980;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 375px;
  height: 812px;
  background: #00000050;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsertForm = styled.form`
  background: #414141;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 990;
  position: relative;
`;

const Text = styled.div`
  margin: 10px;
  color: white;
`;

const Input = styled.input`
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid white;
  width: 80%;
  outline: none;
  color: white;
  font-size: 18px;
  background: #414141;
  box-sizing: border-box;
`;

const AddBtn = styled.button`
  background: #c3b274;
  &:hover {
    background: white;
  }

  cursor: pointer;
  width: 40px;
  height: 40px;
  bottom: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: #414141;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  transition: 0.125s all ease-in;
  font-size: 60px;
`;

const TodoCreate = ({ onToggle, addTodo }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
    onToggle();
  };

  return (
    <>
      <InsertFormPositioner>
        <Background onClick={onToggle}></Background>
        <InsertForm onSubmit={onSubmit}>
          <Text>Add new thing!</Text>
          <Input
            autoFocus
            placeholder="Please type and enter"
            value={value}
            onChange={onChange}
            required
          />
          <AddBtn type="submit">
            <MdAdd />
          </AddBtn>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
