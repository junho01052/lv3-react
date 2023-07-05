import { css, styled } from "styled-components";

const Button = ({ onClick, children, size, pOrN }) => {
  return (
    <StBtn onClick={onClick} size={size} pOrN={pOrN}>
      {children}
    </StBtn>
  );
};

export default Button;

const StBtn = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  color: black;

  ${(props) =>
    props.pOrN === "primary" &&
    css`
      background-color: rgb(85, 239, 196);
    `}

  ${(props) =>
    props.pOrN === "negative" &&
    css`
      background-color: rgb(250, 177, 160);
      color: rgb(214, 48, 49);
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      width: 200px;
      height: 50px;
      background-color: white;
      border: 3px solid rgb(85, 239, 196);
      font-weight: 600;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      width: 130px;
      height: 45px;
    `}

    ${(props) =>
    props.size === "small" &&
    css`
      width: 100px;
      height: 40px;
    `}

    ${(props) =>
    props.size === "large" &&
    props.pOrN === "negative" &&
    css`
      border: 3px solid rgb(250, 177, 160);
    `}
`;
