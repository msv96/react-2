import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  function increament() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <button onClick={() => setCount(count - count)} className="reset">
        Reset
      </button>
      <div className="new">{count}</div>
      <button onClick={increament} className="main">
        Click
      </button>
    </div>
  );
}
