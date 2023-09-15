import React, { useState } from "react";
import "./percentage.css";

const PercentageDifferenceCalculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculatePercentageDifference = () => {
    const val1 = parseFloat(value1);
    const val2 = parseFloat(value2);

    const percentageDecrease = (Math.abs(val1 - val2) / val1) * 100;
    const percentageIncrease =
      (Math.abs(val1 - val2) / ((val1 + val2) / 2)) * 100;

    const decreaseSteps = `Percentage of decrease = |${val1} - ${val2}| / ${val1} = ${Math.abs(
      val1 - val2
    ).toFixed(2)} / ${val1} = ${percentageDecrease.toFixed(2)}%`;
    const increaseSteps = `Percentage of increase = |${val1} - ${val2}| / ((${val1} + ${val2}) / 2) = ${Math.abs(
      val1 - val2
    ).toFixed(2)} / ${(val1 + val2) / 2} = ${percentageIncrease.toFixed(2)}%`;

    setSteps(
      `Steps for Percentage Decrease:\n${decreaseSteps}\nResult: ${percentageDecrease.toFixed(
        2
      )}%\n\nSteps for Percentage Increase:\n${increaseSteps}\nResult: ${percentageIncrease.toFixed(
        2
      )}%`
    );

    setResult(
      `${val1} is a ${percentageDecrease.toFixed(
        2
      )}% decrease of ${val2}.\n\nDifference of ${val1} and ${val2} are ${percentageIncrease.toFixed(
        2
      )}%.`
    );
  };

  const clearFields = () => {
    setValue1("");
    setValue2("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Percentage Difference Calculator</h1>
        <div className="input-group">
          <label className="label">Value 1:</label>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Value 2:</label>
          <input
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
        </div>
        <button
          onClick={calculatePercentageDifference}
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

export default PercentageDifferenceCalculator;
