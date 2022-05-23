import "./styles.css";
import { css } from "@emotion/css";
import { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default function App() {
  const [marginVal, setMarginVal] = useState(10);

  function handleOnClick() {
    let temp = marginVal;
    setMarginVal(temp + 1);
  }
  function handleOnClear() {
    setMarginVal(0);
  }
  return (
    <div
      className={css`
        flex-direction: column;
        align-content: center;
        text-align: center;
        border-width: 2px;
        border-color: black;
        background-color: aliceblue;
      `}
    >
      <h1
        className={css`
          margin: 20px;
          padding: 15px;
        `}
      >
        Harsh Somya Webpage Using ReactJS
      </h1>
      <div
        className={css`
          background-color: lightgoldenrodyellow;
        `}
      >
        <h2>Work in Progress Guys</h2>
      </div>
      <div>
        <button onClick={handleOnClick}>{marginVal}</button>
        <button
          className={css`
            margin: 10px;
          `}
          onClick={handleOnClear}
        >
          clear
        </button>
      </div>
      <div></div>
    </div>
  );
}
