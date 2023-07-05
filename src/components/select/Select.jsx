import { useState } from "react";
import { styled } from "styled-components";

const Select = ({ children }) => {
  const [select, setSelect] = useState(children);

  const onClickSelectListItem = (e) => {
    setSelect(e.target.innerText);
  };
  return (
    <>
      <div>
        <StBtn>
          <div>{select}</div>
          <div>▼</div>
        </StBtn>
        <StSelectListBox>
          <StSelectItem onClick={onClickSelectListItem}>리액트</StSelectItem>
          <StSelectItem onClick={onClickSelectListItem}>자바</StSelectItem>
          <StSelectItem onClick={onClickSelectListItem}>스프링</StSelectItem>
          <StSelectItem onClick={onClickSelectListItem}>리액트네이티브</StSelectItem>
        </StSelectListBox>
      </div>
    </>
  );
};

export default Select;

const StBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;

  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;

const StSelectListBox = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
const StSelectItem = styled.div`
  &:hover {
    background-color: rgb(237, 237, 237);
  }
`;
