import { useState } from "react";
import "./Circle.css";

export default function Card(props) {
  const [count, setCount] = useState(props.color.count);
  const { value } = props.color;

  function increament() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="main">
      <h2>{count}</h2>
      <button
        style={{ backgroundColor: value }}
        onClick={increament}
        className="bttn"
      >
        Click
      </button>
    </div>
  );
}
