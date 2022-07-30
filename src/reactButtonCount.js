import React, { useState } from "react";

const ButtonCount = (props) => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Times Clicked:{count}</button>
  );
};

export default ButtonCount;
