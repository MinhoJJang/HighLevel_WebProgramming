import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState("");
  const handleClick = (value) => {
    if (value === "C") {
      setResult(0);
      setExpression("");
    } else if (value === "=") {
      try {
        const res = evaluate(expression);
        setResult(res);
        setExpression(res.toString());
      } catch (error) {
        setResult("error");
        setExpression("");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="display">{expression || result}</div>
      <div className="button-wrapper">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("C")}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
