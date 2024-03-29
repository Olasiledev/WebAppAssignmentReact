import React, { useState } from "react";
import "../cssStyles/Calculator.css";
//Calculator
function Calculator() {
  const [input, setInput] = useState("");
//Changes
  const makeChange = (e) => {
    setInput(input + e.target.value);
  };
//Calulate function
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator-container">
      <input
        className="calculator-display"
        type="text"
        value={input}
        readOnly
      />
      <div className="calculator-keys">
        <button className="calc-button" onClick={makeChange} value="1">
          1
        </button>
        <button className="calc-button" onClick={makeChange} value="2">
          2
        </button>
        <button className="calc-button" onClick={makeChange} value="3">
          3
        </button>
        <button className="calc-button" onClick={makeChange} value="+">
          +
        </button>
        <button className="calc-button" onClick={makeChange} value="4">
          4
        </button>
        <button className="calc-button" onClick={makeChange} value="5">
          5
        </button>
        <button className="calc-button" onClick={makeChange} value="6">
          6
        </button>
        <button className="calc-button" onClick={makeChange} value="-">
          -
        </button>
        <button className="calc-button" onClick={makeChange} value="7">
          7
        </button>
        <button className="calc-button" onClick={makeChange} value="8">
          8
        </button>
        <button className="calc-button" onClick={makeChange} value="9">
          9
        </button>
        <button className="calc-button" onClick={makeChange} value="*">
          x
        </button>
        <button className="calc-button" onClick={makeChange} value="0">
          0
        </button>
        <button className="calc-button" onClick={clearInput}>
          C
        </button>
        <button className="calc-button" onClick={calculate}>
          =
        </button>
        <button className="calc-button" onClick={makeChange} value="/">
          ÷
        </button>
      </div>
    </div>
  );
}

export default Calculator;
