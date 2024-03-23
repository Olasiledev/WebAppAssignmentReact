import React, { useState } from 'react';
import '../cssStyles/Calculator.css'; 

function Calculator() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(input + e.target.value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="calculator-container">
      <input className="calculator-display" type="text" value={input} readOnly />
      <div className="calculator-keys">
        <button className="calc-button" onClick={handleChange} value="1">1</button>
        <button className="calc-button" onClick={handleChange} value="2">2</button>
        <button className="calc-button" onClick={handleChange} value="3">3</button>
        <button className="calc-button" onClick={handleChange} value="+">+</button>
        <button className="calc-button" onClick={handleChange} value="4">4</button>
        <button className="calc-button" onClick={handleChange} value="5">5</button>
        <button className="calc-button" onClick={handleChange} value="6">6</button>
        <button className="calc-button" onClick={handleChange} value="-">-</button>
        <button className="calc-button" onClick={handleChange} value="7">7</button>
        <button className="calc-button" onClick={handleChange} value="8">8</button>
        <button className="calc-button" onClick={handleChange} value="9">9</button>
        <button className="calc-button" onClick={handleChange} value="*">x</button>
        <button className="calc-button" onClick={handleChange} value="0">0</button>
        <button className="calc-button" onClick={clearInput}>C</button>
        <button className="calc-button" onClick={calculate}>=</button>
        <button className="calc-button" onClick={handleChange} value="/">÷</button>
      </div>
    </div>
  );
}

export default Calculator;
