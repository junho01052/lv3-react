import { useState } from "react";

const useModal = () => {
  //state
  const [value, setValue] = useState(false);
  //onChnageHandler
  const handler = () => {
    setValue(!value);
  };

  return [value, handler];
};

export default useModal;
