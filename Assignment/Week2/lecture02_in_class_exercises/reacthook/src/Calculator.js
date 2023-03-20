import React, { useState } from "react";
import "./styles.css";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    setResult(num1 / num2);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>GCU Calculator</h1>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Sub</button>
        <button onClick={handleMultiply}>Mul</button>
        <button onClick={handleDivide}>Div</button>
      </div>
      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}
