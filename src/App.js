import ButtonList from "./components/button/ButtonList";
import InputList from "./components/input/InputList";
import ModalList from "./components/modal/ModalList";
import SelectList from "./components/select/SelectList";
import { styled } from "styled-components";

const App = () => {
  return (
    <StApp>
      <ButtonList />
      <InputList />
      <ModalList />
      <SelectList />
    </StApp>
  );
};

export default App;

const StApp = styled.div`
  margin: 0px 10px 0px 10px;
`;
