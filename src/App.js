import "./App.css";
import Card from "./Circle";

export default function App() {
  const colors = [
    { id: 1, value: "red", count: 0 },
    { id: 2, value: "green", count: 0 },
    { id: 3, value: "blue", count: 0 },
  ];

  const resetHandle = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <button onClick={resetHandle} className="reset">
        Reset
      </button>
      <div className="new">
        {colors.map((color) => (
          <Card key={color.id} color={color}></Card>
        ))}
      </div>
    </div>
  );
}
