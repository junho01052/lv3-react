import { Children, useState } from "react";
import Button from "../button/Button";
import { css, styled } from "styled-components";

const Modal = ({ children, handleOneButtonModal, handleTwoButtonModal, display }) => {
  return (
    <>
      <StModalBg onClick={handleOneButtonModal}></StModalBg>
      <StModal display={display}>
        <StDesc>{children}</StDesc>
        <StOneBtnContainer>
          <StOneBtn display={display} onClick={handleOneButtonModal}>
            X
          </StOneBtn>
        </StOneBtnContainer>
        <div>
          <StTwoBtn display={display}>
            <Button onClick={handleTwoButtonModal} size="small" pOrN="negative">
              닫기
            </Button>
            <Button onClick={handleTwoButtonModal} size="small" pOrN="primary">
              확인
            </Button>
          </StTwoBtn>
        </div>
      </StModal>
    </>
  );
};

export default Modal;

const StModalBg = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

const StModal = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 300px;
  position: absolute;

  ${(props) =>
    props.display === "oneButton" &&
    css`
      width: 300px;
      height: 200px;
    `}
`;

const StTwoBtn = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;

  ${(props) =>
    props.display === "oneButton" &&
    css`
      display: none;
    `}
`;

const StOneBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;

  ${(props) =>
    props.display === "twoButton" &&
    css`
      display: none;
    `}
`;

const StOneBtnContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

//props텍스트 줄바꿈
const StDesc = styled.div`
  white-space: pre-line;
`;
