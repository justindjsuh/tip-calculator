import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tipValue, setTipValue] = useState<number>(20);
  const [peopleValue, setPeopleValue] = useState<number>(2);
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const handleTotalCalculation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipValue(Number(e.target.value));
    setTipAmount(Math.round(100 * (tipValue / 100) * billAmount) / 100);
  };

  useEffect(() => {
    setTipAmount(Math.round(100 * (tipValue / 100) * billAmount) / 100);
  });

  return (
    <div className="App">
      <h1>Receipt Calculator</h1>
      <div className="selector__container">
        <button>Split Evenly</button>
        <button>Manual Entry</button>
      </div>
      <div className="bill__container">
        <div className="bill__amount">
          <p>Bill Subtotal (w/o tax)</p>
          <div className="amount__input">
            <label>$</label>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => setBillAmount(Number(e.target.value))}
            ></input>
          </div>
        </div>
        <div className="tip__amount">
          <div className="tip__amount__left">
            <p>Tip</p>
            <button className="tip__button">5%</button>
            <button className="tip__button">10%</button>
            <button className="tip__button">15%</button>
            <button className="tip__button">20%</button>
          </div>
          <div className="tip__input">
            <label>$</label>
            <input
              type="number"
              placeholder={String(
                Math.round(100 * (tipValue / 100) * billAmount) / 100
              )}
              onChange={(e) => handleTotalCalculation(e)}
            />
          </div>
        </div>
        <hr />
        <div className="bill__total">
          <p>Total</p>
          <p className="total__amount">
            ${(billAmount + tipAmount).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="details__container">
        <div className="details__sliders">
          <div className="tip__container">
            <div className="tip__header">
              <p>Tip</p>
              <p>{tipValue}%</p>
            </div>
            <div className="tip__slider">
              <input
                type="range"
                min="0"
                max="30"
                value={tipValue}
                onChange={(e) => setTipValue(Number(e.target.value))}
                className="slider"
              />
            </div>
          </div>
          <div className="people__container">
            <div className="people__header">
              <p>People</p>
              <p>{peopleValue}</p>
            </div>
            <div className="people__slider">
              <input
                type="range"
                min="2"
                max="20"
                value={peopleValue}
                onChange={(e) => setPeopleValue(Number(e.target.value))}
                className="slider"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="total_split__container">
          <p>Split total</p>
          <p className="total__amount">
            ${((billAmount + tipAmount) / peopleValue).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
