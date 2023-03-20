import React, { useState } from "react";
//import "./styles.css";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [add, setAdd] = useState("");
  const [sub, setSub] = useState("");
  const [mul, setMul] = useState("");
  const [div, setDiv] = useState("");

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const addHandler = () => {
    setAdd(num1 + num2);
  };

  const subHandler = () => {
    setSub(num1 - num2);
  };

  const mulHandler = () => {
    setMul(num1 * num2);
  };

  const divHandler = () => {
    setDiv(num1 / num2);
  };

  return (
    <div align="center">
      <h1>GCU Calculator</h1>
      <div>
        <input type="text" value={num1} onChange={handleNum1Change} />
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <button style={{ marginLeft: "15px" }} onClick={addHandler}>
          {" "}
          Add{" "}
        </button>{" "}
        {add}
        <button style={{ marginLeft: "15px" }} onClick={subHandler}>
          {" "}
          Sub{" "}
        </button>{" "}
        {sub}
        <button style={{ marginLeft: "15px" }} onClick={mulHandler}>
          {" "}
          Mul{" "}
        </button>{" "}
        {mul}
        <button style={{ marginLeft: "15px" }} onClick={divHandler}>
          {" "}
          Div{" "}
        </button>{" "}
        {div}
      </div>
    </div>
  );
}
