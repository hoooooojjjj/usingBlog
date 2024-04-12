"use client";

import React, { useContext } from "react";
import { CountContext } from "../page";

function Count() {
  const [count, setCount] = useContext(CountContext);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {count}
      <button style={{ marginLeft: "10px" }} onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default Count;
