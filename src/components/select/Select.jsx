import { useState, useRef, useEffect } from "react";
import { css, styled } from "styled-components";
import useBooleanHandler from "../../hooks/useBooleanHandler";

const Select = ({ children, isHidden }) => {
  const [openSelect, handleOpenSelect] = useBooleanHandler();

  const node = useRef();

  const [select, setSelect] = useState(children);

  const onClickSelectListItem = (e) => {
    setSelect(e.target.innerText);
    handleOpenSelect();
  };

  const optionData = ["리액트", "자바", "스프링", "리액트네이티브"];

  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (openSelect && node.current && !node.current.contains(e.target)) {
        handleOpenSelect();
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [openSelect]);

  return (
    <>
      <div>
        <StBtn onClick={handleOpenSelect}>
          <div>{select}</div>
          <div>▼</div>
        </StBtn>
        {openSelect && (
          <StSelectListBox className="me" isHidden={isHidden}>
            {optionData.map((option, i) => {
              return (
                <StSelectItem key={i} onClick={onClickSelectListItem}>
                  {option}
                </StSelectItem>
              );
            })}
          </StSelectListBox>
        )}
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
  margin-top: 10px;
  width: 300px;
  overflow: hidden;

  ${(props) =>
    props.isHidden === "false" &&
    css`
      position: absolute;
    `}
`;
const StSelectItem = styled.div`
  height: 23px;
  font-size: 13px;
  padding: 8px;
  &:hover {
    background-color: rgb(237, 237, 237);
  }
`;
