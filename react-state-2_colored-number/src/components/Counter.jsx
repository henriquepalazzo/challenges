import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import "./Counter.css";

export default function Counter() {
  const [number, setNumber] = useState(0);
  function handleClick(event) {
    setNumber(event.target.innerHTML === "+" ? number + 1 : number - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={number} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleClick}
        >
          -
        </button>
      </div>
    </div>
  );
}
