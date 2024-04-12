"use client";
import React, { useState } from "react";
import Count from "./_component/count";

export const CountContext = React.createContext();

function page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={[count, setCount]}>
        <Count />
        {/* 이 안에 있는 모든 컴포넌트에 count, setCount() 가 전달 됨 */}
      </CountContext.Provider>
    </div>
  );
}

export default page;
