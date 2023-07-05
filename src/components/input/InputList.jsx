import { useState } from "react";
import Button from "../button/Button";
import Input from "./Input";
import { styled } from "styled-components";

const InputList = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePriceWithCommas = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setPrice(removedCommaValue.toLocaleString());
  };

  const onClickSaveButton = () => {
    name.length === 0 || price.length === 0
      ? alert("이름과 가격 모두 입력해주세요.")
      : alert(`{ name: ${name}, price: ${price.replaceAll(",", "")} }`);
  };

  return (
    <>
      <h1>Input</h1>
      <StInputContainer>
        <div>
          <label>이름</label>
          <Input type="text" onChange={onChangeName} value={name}></Input>
        </div>
        <div>
          <label>가격</label>
          <Input type="text" onChange={onChangePriceWithCommas} value={price}></Input>
        </div>
        <Button onClick={onClickSaveButton} pOrN="primary" size="small">
          저장
        </Button>
      </StInputContainer>
    </>
  );
};

export default InputList;

const StInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
