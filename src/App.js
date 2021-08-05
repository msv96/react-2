import "./App.css";
import { useState } from "react";

export default function App() {
  const [like, setLike] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setLike(like - like)} className="reset">
        Reset
      </button>
      <Btn></Btn>
      <Btn></Btn>
      <Btn></Btn>
    </div>
  );
}

function Btn() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <div className="new">{like}</div>
      <button onClick={() => setLike(like + 1)} className="main">
        Click
      </button>
    </div>
  );
}
