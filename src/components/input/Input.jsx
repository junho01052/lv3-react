import { styled } from "styled-components";

const Input = ({ type, onChange, value }) => {
  return (
    <>
      <StInput type={type} onChange={onChange} value={value}></StInput>
    </>
  );
};

export default Input;

const StInput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;
