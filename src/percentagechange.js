import React, { useState } from "react";
import "./percentage.css";

const PercentageChangeCalculator = () => {
  const [value1, setValue1] = useState("");
  const [percentChange, setPercentChange] = useState("");
  const [calculationType, setCalculationType] = useState("increase");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculatePercentageChange = () => {
    const val1 = parseFloat(value1);
    const percentage = parseFloat(percentChange) / 100;

    let calculatedResult;
    if (calculationType === "increase") {
      calculatedResult = val1 * (1 + percentage);
      setSteps(
        `${val1} increase ${percentChange}% = ${val1} × (1 + ${percentChange}%) = ${val1} × (1 + ${percentage}) = ${calculatedResult.toFixed(
          2
        )}`
      );
    } else if (calculationType === "decrease") {
      calculatedResult = val1 / (1 + percentage);
      setSteps(
        `${val1} decrease ${percentChange}% = ${val1} / (1 + ${percentChange}%) = ${val1} / (1 + ${percentage}) = ${calculatedResult.toFixed(
          2
        )}`
      );
    }

    setResult(`Result: ${calculatedResult.toFixed(2)}`);
  };

  const clearFields = () => {
    setValue1("");
    setPercentChange("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Percentage Change Calculator</h1>
        <div className="input-group">
          <label className="label">Value:</label>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Percentage Change (%):</label>
          <input
            type="number"
            value={percentChange}
            onChange={(e) => setPercentChange(e.target.value)}
            placeholder="Enter a percentage"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Calculation Type:</label>
          <select
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value)}
            className="input"
          >
            <option value="increase">Increase</option>
            <option value="decrease">Decrease</option>
          </select>
        </div>
        <button
          onClick={calculatePercentageChange}
          className="calculate-button"
        >
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">{result}</div>
        <div className="steps">{steps}</div>
      </div>
    </div>
  );
};

export default PercentageChangeCalculator;
