import React, { useState } from "react";

function Cal() {
    const 

  return (
    <div align="center">
      <h2> GCU Calculator </h2>
      <input type="text" value={num1} onChange={handleNum1Change} />
      <input type="text" value={num2} onChange={handleNum2Change} />
      <p>
        <button onClick={addHandler}> Add </button> {add}
        <button onClick={subHandler}> Sub </button> {sub}
        <button onClick={mulHandler}> Mul </button> {mul}
        <button onClick={divHandler}> Div </button> {div}
      </p>
    </div>
  );
}
