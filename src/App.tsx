import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="bill__container"></div>
      <div className="tip__container"></div>
      <div className="total__container"></div>
    </div>
  );
}

export default App;
