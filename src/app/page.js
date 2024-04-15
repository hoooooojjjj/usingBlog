"use client";
import { useState } from "react";
import "./styles.css";
import classNames from "classnames";

function Home() {
  const [isRed, setIsRed] = useState(false);

  const blueClick = () => {
    setIsRed(false);
  };
  const redClick = () => {
    setIsRed(true);
  };
  return (
    <div className="container">
      <div>
        <div>
          <button onClick={blueClick} className="btn">
            파랑
          </button>
          <button onClick={redClick} className="btn">
            빨강
          </button>
        </div>
        <div className={`box ${isRed ? "red" : "blue"}`}></div>
        <div className={classNames("box", { red: isRed, blue: isRed })}></div>
      </div>
    </div>
  );
}

export default Home;
