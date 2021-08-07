import "./Circle.css";

export default function Card(props) {

  return (
    <div className="main">
      <h3>{props.data.count}</h3>
      <button
        style={{backgroundColor:props.data.value}}
        onClick={() => {props.handleCount(props.data.id)}}
        className="bttn"
      >
        Click
      </button>
    </div>
  );
}
