import { useState } from "react";

const useBooleanHandler = () => {
  //state
  const [value, setValue] = useState(false);
  //onChnageHandler
  const handler = () => {
    setValue(!value);
  };

  return [value, handler];
};

export default useBooleanHandler;
