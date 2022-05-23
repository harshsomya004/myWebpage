import "./styles.css";
import { css } from "@emotion/css";

export default function App() {
  return (
    <div className="App">
      <h1>Harsh Somya Webpage Using ReactJS</h1>
      <div
        className={css`
          background-color: red;
        `}
      >
        <h2>Work in Progress Guys</h2>
      </div>
    </div>
  );
}
