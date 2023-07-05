import Select from "./Select";
import { styled } from "styled-components";
import { useState } from "react";

const SelectList = () => {
  return (
    <StSelectBox>
      <h1>Select</h1>
      <StSelectContainer>
        <Select children="리액트"></Select>
        <Select children="리액트"></Select>
      </StSelectContainer>
    </StSelectBox>
  );
};

export default SelectList;

const StSelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StSelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;
