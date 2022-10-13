import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd, MdAddCircle } from "react-icons/md";

const Background = styled.div`
  position: absolute;
  z-index: 980;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 375px;
  height: 812px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000050;
`;

const CircleButton = styled.button`
  background: #c3b274;
  &:hover {
    background: #c3b274;
  }
  &:active {
    background: #c3b274;
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
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 80%;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #414141;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .add-btn {
    margin-top: 30px;
    font-size: 40px;
    color: #c3b274;
  }
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

const TodoCreate = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      <Background>
        {open && (
          <InsertFormPositioner>
            <InsertForm>
              <Text>Add new thing!</Text>
              <Input autoFocus placeholder="Enter" />
              <MdAddCircle className="add-btn" />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
          <MdAdd />
        </CircleButton>
      </Background>
    </>
  );
};

export default TodoCreate;
