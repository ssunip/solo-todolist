import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 375px;
  height: 812px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.2);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 80px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Template = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default Template;
