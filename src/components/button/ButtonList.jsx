import { styled } from "styled-components";
import Button from "./Button";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import { ReactComponent as Chevron } from "../../assets/svg/chevron-right.svg";

const ButtonList = () => {
  const onClickLargePrimaryButton = () => {
    alert("버튼을 만들어보세요");
  };
  const onClickLargeNegativeButton = () => {
    prompt("어렵나요?");
  };
  return (
    <>
      <h1>Button</h1>
      <StButtonContainer>
        <StPNContainer>
          <Button onClick={onClickLargePrimaryButton} size="large" pOrN="primary">
            <StSvg>
              {"Large Primary Button"}
              <Chevron />
            </StSvg>
          </Button>
          <Button size="medium" pOrN="primary">
            Medium
          </Button>
          <Button size="small" pOrN="primary">
            Small
          </Button>
        </StPNContainer>
        <StPNContainer>
          <Button onClick={onClickLargeNegativeButton} size="large" pOrN="negative">
            <StSvg>
              {"Large Negative Button"}
              <Bell />
            </StSvg>
          </Button>
          <Button size="medium" pOrN="negative">
            Medium
          </Button>
          <Button size="small" pOrN="negative">
            Small
          </Button>
        </StPNContainer>
      </StButtonContainer>
    </>
  );
};

export default ButtonList;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StPNContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const StSvg = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 7px;
`;
