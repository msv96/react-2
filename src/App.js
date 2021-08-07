import "./App.css";
import Card from "./Circle";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState([
    { id: 1, value: "red", count: 0 },
    { id: 2, value: "green", count: 0 },
    { id: 3, value: "blue", count: 0 },
  ]);

  let reset = () => {
    count.map((obj) => obj.count = 0);
    setCount([...count]);
  };

  let increment = (id) => {
    let countIndex = count.findIndex((obj) => obj.id === id);
    count[countIndex].count++;
    setCount([...count]);
  };

  return (
    <div className="App">
      <button onClick={reset} className="reset">
        Reset
      </button>
      <div className="new">
        {count.map((ele) => (
          <Card key={ele.id} data={ele} handleCount={increment}></Card>
        ))}
      </div>
    </div>
  );
}
