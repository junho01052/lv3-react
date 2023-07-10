import Select from "./Select";
import { styled } from "styled-components";
import { useState } from "react";

const SelectList = () => {
  return (
    <StSelectBox>
      <h1>Select</h1>
      <StSelectContainer>
        <Select children="리액트" isHidden="false"></Select>
        <Select children="리액트" isHidden="true"></Select>
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
  margin-top: 50px;
`;
