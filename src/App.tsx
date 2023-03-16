import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Receipt Calculator</h1>
      <div className="selector__container">
        <button>Split Evenly</button>
        <button>Manual Entry</button>
      </div>
      <div className="bill__container"></div>
      <div className="details__container">
        <div className="tip__container">
          <div className="tip__header">
            <p>Tip</p>
            <p>{}</p>
          </div>
          <div className="tip__slider">
            <input
              type="range"
              min="0"
              max="30"
              value="20"
              className="slider"
            />
          </div>
        </div>
        <div className="people__container">
          <div className="people__header">
            <p>People</p>
            <p>{}</p>
          </div>
          <div className="people__slider">
            <input type="range" min="2" max="20" value="2" className="slider" />
          </div>
        </div>
        <hr />
        <div className="total_split__container">
          <p>Split total</p>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
