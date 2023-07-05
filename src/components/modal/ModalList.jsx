import Modal from "./Modal";
import { useState } from "react";
import Button from "../button/Button";
import useModal from "../../hooks/useModal";
import { styled } from "styled-components";

const ModalList = () => {
  const [twoButtonModal, handleTwoButtonModal] = useModal(false);
  const [oneButtonModal, handleOneButtonModal] = useModal(false);

  return (
    <>
      <h1>Modal</h1>
      <StModalList>
        <Button onClick={handleTwoButtonModal} size="small" pOrN="primary">
          Open Modal
        </Button>
        {twoButtonModal && (
          <Modal
            handleTwoButtonModal={handleTwoButtonModal}
            children="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요."
            display="twoButton"
          />
        )}
        <Button onClick={handleOneButtonModal} size="large" pOrN="negative">
          Open Modal
        </Button>
        {oneButtonModal && (
          <Modal
            handleOneButtonModal={handleOneButtonModal}
            children={"닫기 버튼이 1개가 있고,\n외부 영역을 누르면 모달이 닫혀요."}
            display="oneButton"
          />
        )}
      </StModalList>
    </>
  );
};
export default ModalList;

const StModalList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
