import React, { useState } from "react";
import "./percentage.css";

const Percentage = () => {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState("");

  const calculatePercentage = () => {
    const num = parseFloat(number);
    const perc = parseFloat(percentage) / 100;
    const calculatedResult = num * perc;

    setResult(
      `${percentage}% of ${number} = ${
        percentage / 100
      } × ${number} = ${calculatedResult.toFixed(2)}`
    );
  };

  const clearFields = () => {
    setNumber("");
    setPercentage("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Percentage Calculator</h1>
        <div className="input-group">
          <label className="label">Number:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Percentage:</label>
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="Enter a percentage"
            className="input"
          />
        </div>
        <button onClick={calculatePercentage} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default Percentage;
